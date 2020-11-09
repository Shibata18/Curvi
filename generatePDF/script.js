var doc = new jsPDF()
    $('#gerarPDF').on('click', function gerarPDF() {
        $('.replace').html(`
        <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Carregando...
      </button>`)
        $.ajax({
            type: 'GET',
            url: `https://curvi-api.herokuapp.com/user/${$('#user_id').val()}`,
            success: function (dados) {
                doc.text(5, 5, 'Currículo Gerado pela Curvi')
                console.log(dados);
                for (let i in dados) {
                    $('#profile').html(
                        `
                            <h2>Dados Pessoais</h2>
                            <p>${dados.name}</p>
                            <p>${dados.email}</p>
                            <p>${dados.address}</p> 
                            <p>${dados.city} - ${dados.state}</p>
                            <p>Celular: ${dados.cellphone}</p>
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
                            <p>${ dados.goal}</p> 
                            `) 
                        // $('#socialMedia').html(
                        //     `
                        //     <h3>Redes Sociais</h3>
                        //     <p>${ dados.socialMedia.telegram}</p> 
                        //     <p>${ dados.socialMedia.instagram}</p>
                        //     `) 
                }
                doc.fromHTML($('.response').get(0), 10, 10, { 'width': 180 });
                doc.save(`${dados.name}.pdf`)
                //doc.autoPrint();
                //doc.output("dataurlnewwindow")
                $('.replace').html('<button class="btn btn-success" disabled>Concluído</button>')
            },
            error: function (dados) {
                console.log(dados);
            }
        })
    })