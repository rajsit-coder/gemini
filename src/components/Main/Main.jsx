import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = () => {


    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)


    return (
        <div className='main'>
            <div className="nav">
                <div className="nav-left">
                    <div className='logo'>
                        <p>Gemini</p>
                        <img src={assets.down} alt="" />
                    </div>
                    <span>1.5 Flash</span>
                </div>
                <div className='nav-right'>
                    <div className="try">
                        <img src={assets.try_logo} alt="" />
                        <p>Try Advance Gemini</p>
                    </div>
                    <div className='dot'>
                        <img src={assets.dot} alt="" />
                    </div>
                    <img src={assets.user_icon} alt="" />
                </div>
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, RAJ.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div onClick={() => onSent("Suggest beautiful places to see on an upcoming road trips")} className="card">
                                <p>Suggest beautiful places to see on an upcoming road trips</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div onClick={() => onSent("Briefly summarize this concept: urban planning")} className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div onClick={() => onSent("Brainstorm team bonding activities for our work retreat")} className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div onClick={() => onSent("Tell me about React js and React native")} className="card">
                                <p>Tell me about React js and React native</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <div>
                            <img className='btn-btm' src={assets.gallery_icon} alt="" />
                        </div>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Ask Gemini' />
                        <div>
                            {input ? <img className='btn-btm' onClick={() => onSent()} src={assets.send_icon} alt="" /> : <img className='btn-btm' src={assets.mic_icon} alt="" />}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main