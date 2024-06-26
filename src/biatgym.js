import './styleforcontent.css';
// import chinups from './chinups.jpg';
// import './barbellcurls.jpg'
function Biatgym() {

    return (
        <div id="maincontent">
            <div>
                <ol>
                    <li><span className='heading'>Barbell Curl</span>
                        <div className='flex'>
                            {/* <div>
                                <img src={require('./images/barbellcurl.jpg')} alt='Photo by Anush Gorak: https://www.pexels.com/photo/man-holding-barbell-1431282/' style={{ width: '450px', marginTop: '23px' }} />
                            </div> */}
                            <div style={{ marginTop: '65px', marginLeft: '20px' }}><ul><li><span style={{ fontSize: '28px' }}>Muscles Targeted : </span> <span style={{ fontSize: "20px" }}> Long head, short head</span></li>
                                <li><span style={{ fontSize: '28px' }}>How to do it :</span>
                                    <div style={{ paddingTop: '10px' , wordSpacing:'10px'}}>{/*<ol>
                                 <li>Find a sturdy bar or ledge you can grip.</li>
                                <li>Grasp the bar with your palms facing you (supinated grip) and hands shoulder-width apart.</li>
                                <li>Hang fully extended and pull your body up until your chin is above the bar.</li>
                                <li>Lower yourself back down with control.</li>
                            </ol>*/}Stand with feet shoulder-width apart. Hold a barbell with an underhand grip, hands shoulder-width apart. Keep your elbows close to your torso and curl the barbell up towards your shoulders. Lower it back down slowly.
                                    </div></li>
                                <li><span style={{ fontSize: '28px' }}>Reps and Sets : </span>3 sets of 10-12 reps</li>

                            </ul></div>
                        </div>
                    </li>
                    <li><span className='heading'> Dumbbell Hammer Curl</span>
                        <div className='flex'>
                            {/* <div> */}
                                {/* <img src={require('./images/hammer.jpg')} alt='Photo by Julia Larson : https://www.pexels.com/photo/determined-ethnic-sportsman-exercising-with-dumbbells-in-gym-6456021/' style={{ width: '450px', marginTop: '23px' }} /> */}
                            {/* </div> */}
                            <div style={{ marginTop: '65px', marginLeft: '20px' }}><ul><li><span style={{ fontSize: '28px' }}>Muscles Targeted : </span><span style={{ fontSize: "20px" }}> Long head, short head</span></li>
                            <li><span style={{ fontSize: '28px' }}>How to do it :</span>
                                <div style={{ paddingTop: '10px' , wordSpacing:'10px'}}>Hold a dumbbell in each hand with your palms facing your torso. Keep your elbows close to your body and curl the weights while keeping your upper arms stationary. Lower the weights back down slowly.</div></li>
                                <li><span style={{ fontSize: '28px' }}>Reps and Sets : </span>  3 sets of 10-12 reps</li>

                            </ul></div>
                        </div>
                    </li>
                    <li><span className='heading'> Preacher Curl</span>
                        <div className='flex'>
                            {/* <div> */}
                                {/* <img src='' alt='Photo by Julia Larson : https://www.pexels.com/photo/determined-ethnic-sportsman-exercising-with-dumbbells-in-gym-6456021/' style={{ width: '450px', marginTop: '23px' }} /> */}
                            {/* </div> */}
                            <div style={{ marginTop: '65px', marginLeft: '20px' }}><ul><li><span style={{ fontSize: '28px' }}>Muscles Targeted : </span><span style={{ fontSize: "20px" }}>  Long head, short head</span></li>
                            <li><span style={{ fontSize: '28px' }}>How to do it :</span>
                                <div style={{ paddingTop: '10px' , wordSpacing:'10px'}}>Sit on a preacher bench and hold an EZ-bar with an underhand grip. Rest your upper arms on the preacher bench pad. Curl the bar up towards your shoulders and then lower it back down slowly.</div></li>
                                <li><span style={{ fontSize: '28px' }}>Reps and Sets : </span> 3 sets of 8-12 reps</li>

                            </ul></div>
                        </div>
                    </li>
                    <li><span className='heading'>Concentration Curl</span>
                        <div className='flex'>
                            {/* <div> */}
                                {/* <img src={require('./images/consentration.jpg')} alt='Photo by Andres  Ayrton: https://www.pexels.com/photo/muscular-asian-man-pumping-bicep-6550857/' style={{ width: '450px', marginTop: '23px' }} /> */}
                            {/* </div> */}
                            <div style={{ marginTop: '65px', marginLeft: '20px' }}><ul><li><span style={{ fontSize: '28px' }}>Muscles Targeted : </span><span style={{ fontSize: "20px" }}> Peak of the biceps</span></li>
                            <li><span style={{ fontSize: '28px' }}>How to do it :</span>
                                <div style={{ paddingTop: '10px' , wordSpacing:'10px'}}>Sit on a bench and spread your legs. Hold a dumbbell in one hand and rest your elbow on the inner part of your thigh. Curl the weight up towards your shoulder, then lower it back down slowly.</div></li>
                                <li><span style={{ fontSize: '28px' }}>Reps and Sets : </span> 3 sets of 10-12 reps each arm</li>

                            </ul></div>
                        </div>
                    </li>
                    <li><span className='heading'>Incline Dumbbell Curl</span>
                        <div className='flex'>
                            {/* <div> */}
                                {/* <img src={require('./images/inclineddumbbell.jpg')} alt='Photo by Alesia  Kozik: https://www.pexels.com/photo/a-man-working-out-using-dumbbells-7289369/' style={{ width: '450px', marginTop: '23px' }} /> */}
                            {/* </div> */}
                            <div style={{ marginTop: '65px', marginLeft: '20px' }}><ul><li><span style={{ fontSize: '28px' }}>Muscles Targeted : </span><span style={{ fontSize: "20px" }}> Long head</span></li>
                            <li><span style={{ fontSize: '28px' }}>How to do it :</span>
                                <div style={{ paddingTop: '10px' , wordSpacing:'10px'}}>Sit on an incline bench with a dumbbell in each hand, arms hanging down. Curl the weights up while keeping your upper arms stationary. Lower them back down slowly.</div></li>
                                <li><span style={{ fontSize: '28px' }}>Reps and Sets : </span> 3 sets of 8-12 reps</li>

                            </ul></div>
                        </div>
                    </li>
                    <li><span className='heading'>Cable Curl</span>
                        <div className='flex'>
                            {/* <div> */}
                                {/* <img src={require('./images/cablecurls.jpg')} alt='Photo by Ivan Samkov: https://www.pexels.com/photo/man-exercising-at-a-gym-4162484/' style={{ width: '450px', marginTop: '23px' }} /> */}
                            {/* </div> */}
                            <div style={{ marginTop: '65px', marginLeft: '20px' }}><ul><li><span style={{ fontSize: '28px' }}>Muscles Targeted : </span><span style={{ fontSize: "20px" }}> Long head, short head</span></li>
                            <li><span style={{ fontSize: '28px' }}>How to do it :</span>
                                <div style={{ paddingTop: '10px' , wordSpacing:'10px'}}>Stand facing a cable machine with the handle set to the lowest position. Hold the handle with an underhand grip and curl it up towards your shoulders. Lower it back down slowly.</div></li>
                                <li><span style={{ fontSize: '28px' }}>Reps and Sets : </span> 3 sets of 12-15 reps</li>

                            </ul></div>
                        </div>
                    </li>

                </ol>
                <div>
                    <h3>Tips for an Effective Workout ✨</h3>
                    <ul>
                        <li>Warm-Up: Always start with a 5-10 minute warm-up to get your muscles ready.</li>
                        <li>Proper Form: Focus on maintaining proper form throughout each exercise to avoid injury and maximize muscle engagement.</li>
                        <li>Control: Perform each rep with control, especially on the way down to increase time under tension.</li>
                        <li>Progressive Overload: Gradually increase the weights you lift to continually challenge your muscles.</li>
                        <li>Rest: Allow adequate rest between sets (60-90 seconds) and between biceps workouts (48 hours).</li>
                        <li>Nutrition: Support your workouts with a balanced diet rich in protein and other essential nutrients.</li>
                    </ul>
                </div>
            </div>

        </div>
    )

}


export default Biatgym;