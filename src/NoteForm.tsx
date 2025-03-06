import { FormEvent, useRef, useState } from 'react'
import { Button, Col, Form, FormGroup, Row, Stack } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'
import CreatableReactSelect from 'react-select/creatable'
import { NoteData, Tag } from './App'

type NoteFormProps = {
    onSubmit: (data: NoteData) => void //when we submit, we pass notedata and expect nothing in return
}

export function NoteForm({ onSubmit } : NoteFormProps){
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: []
        })
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Stack gap={3} className='mb-4'>
                    <Row>
                        <Col>
                            <FormGroup controlId='title'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    required
                                    ref={titleRef}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup controlId='tags'>
                                <Form.Label>Tags</Form.Label>
                                <CreatableReactSelect 
                                    isMulti
                                    value={selectedTags.map(tag => {
                                        return { label: tag.label, value: tag.id }
                                    })}
                                    onChange={tags => {
                                        setSelectedTags(
                                            tags.map(tag => {
                                                return { label: tag.label, id: tag.value }
                                    }))
                                    }}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                        <FormGroup controlId='markdown'>
                            <Form.Label>Body</Form.Label>
                            <Form.Control 
                                required
                                as="textarea"
                                rows={10}
                                ref={markdownRef}
                            />
                        </FormGroup>
                </Stack>
                <Stack direction="horizontal" gap={2} className='justify-content-end'>
                    <Button
                        type="submit"
                        variant='primary'
                    >
                        Save
                    </Button>
                    <Link to='..'> 
                    {/* .. takes us back to one page behind from where we came to this page. */}
                        <Button
                            type="button"
                            variant='outline-secondary'
                        >
                            Cancel
                        </Button>
                    </Link>
                </Stack>
            </Form>
        
        </>
    )
}