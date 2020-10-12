import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import api from '../../services/api'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

export default function Resume() {
    const [resume, setResume] = useState('');

    useEffect(() => {
        const user_email = localStorage.getItem('email')
        async function getResume() {
            try {
                const response = await api.get('/resume', { headers: { email: user_email } })
                console.log(response.data);
                setResume(response.data)
            } catch (error) {
                console.log(error.response);
            }
        }
        getResume()
    }, []);

    console.log(resume);
    return (
        <Container component="main" maxWidth="xs">
            <PDFViewer>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text>Section #1</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Section #2</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}