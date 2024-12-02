import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import { todoService } from '../services/todoService'





export default function Home() {
    const [todos, setTodo] = useState([{ id: '1', name: 'test1', isCheck: false }])
    const [isShowDialog, setIsShowDialog] = useState(false)

    const handleSaved = async (inputText,isChecked,id) => {
        // didSaved(inputText,inputChecked)
        console.log(`Listen for save ${inputText} , ${isChecked}, id is ${id}`)
        if (id == null) {
            try {
                await requestSave(inputText,isChecked)
                fetchTodo()
            }catch(e) {
                console.error('error Occure',e)
            }
        }else {
            try{
                console.log('should request update')
                await requestUpdate(id,isChecked,inputText)
            }catch(e) {
                console.error('Error on edit: ',e)
            }
        }
    }


    const requestSave = async (name,isCheck)=>{
        await todoService.postTodo(name,isCheck)
    }

    const requestUpdate = async(id,isCheck,name) => {
        await todoService.updateTodo(name,isCheck,id);
    }

    const fetchTodo = async () => {
        const res = await todoService.getAllTodo()
        console.log(`Todo response `, res.data)
        setTodo(res.data.data)
    }

    useEffect(() => {
    
        fetchTodo()
    },[])

    return (
        <div>
            <div className='container mx-auto text-gr mt-12'>
                
                <div className='flex flex-col mx-auto w-[40%] border bg-white h-96 p-4 rounded-lg'>
                    <div className='flex justify-between'>
                        <label className='font-bold text-2xl'>TODO LIST</label>

                    </div>
                    <div className=' overflow-y-auto mt-3'>
                        <div className=' space-y-4'>
                            {todos.map(todo => {
                                return <Todo didSaved={handleSaved} key={`${todo._id}`} todo={todo} className='mt-5'/>
                            })}
                        </div>
                        <div className='mt-4'>
                            <Todo key={'new'} isNew={true} didSaved={handleSaved}/>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
