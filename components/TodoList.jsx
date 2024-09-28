"use client"

import React, { useState } from 'react'
import { PlusIcon, TrashIcon, CheckIcon } from '@heroicons/react/24/solid'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Todo List</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={addTodo} className="flex space-x-2 mb-4">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow"
          />
          <Button type="submit" size="icon" variant='secondary'>
            <PlusIcon className="h-5 w-5" />
            <span className="sr-only">Add todo</span>
          </Button>
        </form>
        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center space-x-2">
              <Button
                size="icon"
                variant={todo.completed ? "secondary" : "outline"}
                onClick={() => toggleTodo(todo.id)}
                className="shrink-0"
              >
                <CheckIcon className={`h-4 w-4 ${todo.completed ? 'text-white' : 'text-gray-400'}`} />
                <span className="sr-only">
                  {todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                </span>
              </Button>
              <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.text}
              </span>
              <Button
                size="icon"
                variant="outline"
                onClick={() => deleteTodo(todo.id)}
                className="shrink-0"
              >
                <TrashIcon className="h-4 w-4 text-red-500" />
                <span className="sr-only">Delete todo</span>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}