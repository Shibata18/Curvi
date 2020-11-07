var doc = new jsPDF()
    $('#gerarPDF').on('click', function gerarPDF() {
        $.ajax({
            type: 'GET',
            url: `https://curvi-api.herokuapp.com/user/${$('#user_id').val()}`,
            success: function (dados) {
                doc.text(5, 5, 'Currículo Gerado pela Curvi')
                document.getElementsByClassName('content').style = 'display:none'
                for (let i in dados) {
                    $('#profile').html(
                        `
                            <h2>Dados Pessoais</h2>
                            <p>${dados.fullname}</p>
                            <p>${dados.occupation}</p>
                            <p>${dados.address}</p> 
                            <p>${dados.email}</p>
                            <p>Telefone: ${dados.homephone}</p>
                            <p>Celular: ${dados.mobilephone}</p>
                            <p>${dados.birthday}</p>
                            `)
                    //doc.text(dados.fullname)
                    //doc.text(dados.occupation)
                    for (let courses of dados.degree) {
                        $('#course').html(
                            `
                            <h3>Formação Acadêmica</h3>
                            <p>${courses.school}</p>
                            <p>Período${courses.periodCourse}</p> 
                            <p>Curso: ${courses.courseName}</p> 
                            <p>${courses.courseDescription}</p>
                            `)
                        //  doc.text(courses.courseName, 10, 50)
                    }
                    for (const xp of dados.experience) {
                        $('#xp').html(
                            `
                            <h3>Experiências</h3>
                            <p>${xp.cargo}</p> 
                            <p>${xp.companyName}</p>
                            <p>${xp.description}</p> 
                            <p>${xp.period}</p>
                            `)
                        //doc.text(xp.cargo, 10, 100)

                    }
                    for (const extraCourse of dados.extraCourse) {
                        $('#extraCourse').html(
                            `
                            <h3>Cursos Complementares</h3>
                            <p>${extraCourse.courseLocal}</p> 
                            <p>${extraCourse.courseNameExtra}</p>
                            <p>${extraCourse.courseExtraDescription}</p> 
                            <p>${extraCourse.courseExtraPeriod}</p>
                            `)
                        
                    }
                        $('#goal').html(
                            `
                            <h3>Objetivo</h3>
                            <p>${ dados.goal.goalDescription}</p> 
                            <p>${ dados.goal.skills}</p>
                            `) 
                        $('#socialMedia').html(
                            `
                            <h3>Redes Sociais</h3>
                            <p>${ dados.socialMedia.telegram}</p> 
                            <p>${ dados.socialMedia.instagram}</p>
                            `) 
                    console.log(dados);
                }
                //doc.fromHTML(document.body);
                //doc.save('a4.pdf')
                doc.fromHTML($('.response').get(0), 10, 10, { 'width': 180 });
                doc.autoPrint();
                doc.output("dataurlnewwindow")
            },
            error: function (dados) {
                console.log(dados);
            }
        })
    })