import { Col, Form, FormGroup, Row, Stack } from 'react-bootstrap'
export function NoteForm(){
    return (
        <>
            <Form>
                <Stack gap={2}>
                    <Row>
                        <Col>
                            <FormGroup controlId='title'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup controlId='tags'>
                                <Form.Label>Tags</Form.Label>
                                <Form.Control 
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Stack>
            </Form>
        
        </>
    )
}