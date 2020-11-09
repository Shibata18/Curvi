var doc = new jsPDF()
    $('#gerarPDF').on('click', function gerarPDF() {
        $('.replace').html(`
        <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Carregando...
      </button>`)
        $.ajax({
            type: 'GET',
            //url: `https://curvi-api.herokuapp.com/user/${$('#user_id').val()}`,
            url: `http://localhost:3333/user/${$('#user_id').val()}`,
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
                        $('#course').html(
                            `
                            <h3>Formação Acadêmica</h3>
                            <p>${dados.courseSchool}</p>
                            <p>Período${dados.courseStartYear} - ${dados.courseEndYear}</p> 
                            <p>Curso: ${dados.courseName}</p> 
                            `)
                        //  doc.text(courses.courseName, 10, 50)
                        $('#xp').html(
                            `
                            <h3>Experiências</h3>
                            <p>${dados.companyOccupation}</p>
                            <p>${dados.companyStart} - ${dados.companyEnd}</p>  
                            <p>${dados.companyName}</p>                            
                            <p>${dados.companyDescription}</p>
                            `)
                        //doc.text(xp.cargo, 10, 100)
                        $('#goal').html(
                            `
                            <h3>Objetivo</h3>
                            <p>${ dados.goal}</p> 
                            `)  
                }
                doc.fromHTML($('.response').get(0), 10, 10, { 'width': 180 });
                //doc.save(`${dados.name}.pdf`)
                doc.autoPrint();
                doc.output("dataurlnewwindow")
                $('.replace').html('<button class="btn btn-success" disabled>Concluído</button>')
            },
            error: function (dados) {
                console.log(dados);
            }
        })
    })