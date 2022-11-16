import '../css/waitingRooms/waitingRoom.scss'

import { useContext } from 'react'
import { useNavigate } from 'react-router';
import Layout from './Layout'
import WaitingRoom from '../components/WaitingRoom';
import socket from "../Socket";
import  { GameContext } from '../context/Game'


export default function WaitingRoomHost() {
  const { roomId } = useContext(GameContext);
  const navigate = useNavigate();

  const clickStart= () => {
    socket.emit("start_game", roomId)
    navigate("/game-room");
  }

  return (
    <>
      <Layout/>
      <WaitingRoom onClick={clickStart}/>
      {/* <!-- box indicating if we are still waiting for players --> */}
      {/* <!-- TODO: This text only appears if there is no player connected apart from the host --> */}
      <div className="col d-flex text-center justify-content-center">
        <section className="box-container">
          <h2 className="unselectable-text">Waiting for players...</h2>
        </section>
      </div>
    </>
  )
}
