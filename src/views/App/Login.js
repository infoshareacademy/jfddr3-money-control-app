import React, { useRef } from 'react'
import { Form, Button,   Card } from 'react-bootstrap' 


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
  



    return (
     <>
              <Card>
               <Card.Body>
                   <h2 className='text-center mb-4'>Log In </h2>
                   <Form>
                       <Form.Group id='email'>
                           <Form.Label>E-mail</Form.Label>
                           <Form.Control 
                           style={{ marginBottom: '15px'}}type="email" ref={emailRef} required />
                       </Form.Group>
                       <Form.Group id='password'>
                           <Form.Label>Password</Form.Label>
                           <Form.Control 
                           style={{ marginBottom: '15px'}}
                           type="password" ref={passwordRef} required />
                       </Form.Group>
                       <Button className="w-100" 
                       style={{ margin: '15px 0px'}}type='submit'> Log In
                       </Button>
                    </Form>
                    
                </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2' >
             Need an account? Sign  Up 
           </div>

           
          
     </>

    )
 }