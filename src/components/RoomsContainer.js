import React from 'react'
import { RoomConsumer } from '../context'
import Loading from './Loading'
import RoomList from './RoomList'
import RoomsFilter from './RoomsFilter'

export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {value => {
                const { loading, sortedRooms, rooms } = value

                if(loading) {
                    return <Loading />
                }
                return (
                    <>
                        <RoomsFilter rooms={rooms} />
                        <RoomList rooms={sortedRooms} />
                    </>
                )
            }}
        </RoomConsumer>
    )
}
