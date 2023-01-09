import React from 'react'
import { UseQuery, UseMutation,useQueryClient } from 'react-query'
import { addChat, getChat } from '../apiChat'
import { useState } from 'react'
export default function ChatList() {
    const [newChat, setNewChat] = useState('')
    const queryClient = useQueryClient()
  return (
    <div>ChatList</div>
  )
}
