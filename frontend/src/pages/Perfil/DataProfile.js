import React from 'react'
import { red } from '@material-ui/core/colors';
import { Card, Avatar, CardHeader, CardContent, Typography } from '@material-ui/core';
import ModalProfile from './ModalProfile'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        paddingTop: '56',
        marginTop: 50,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 15,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));
function DataProfile(props) {
    const classes = useStyles();
    const user = props.items.map(data => {
        return (
            <Card className={classes.root} key={data.id}>
                <CardHeader
                    avatar={<Avatar aria-label={data.nome} className={classes.avatar} />}
                    title={data.nome}
                    subheader={data.email}
                />
                <CardContent>
                    <Typography variant="h6" component="h3">
                        <p>Email: {data.email}</p>
                    </Typography>
                    <Typography variant="h6" component="h3">
                        <p>Nome: {data.nome}</p>
                    </Typography>
                    <Typography variant="h6" component="h3">
                        <p>TELEFONE: {data.telefone}</p>
                    </Typography>
                    <Typography variant="h6" component="h3">
                        <p>STATUS: {data.nome_curso}</p>
                    </Typography>
                    <ModalProfile buttonLabel="Editar" item={data} updateState={props.updateState} />
                </CardContent>
            </Card>
        )

    });

    return (
        <div>
            {user}
        </div>
    )
}

export default DataProfile
