import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { Roll, Zoom } from 'react-reveal';
import { FaUser } from "react-icons/fa";

const Portfolio = () => {
    return (
        <div>
            <VerticalTimeline lineColor='#3e497a'>
                <Roll>
                    <VerticalTimelineElement className='vertical-timeline-element--education' iconStyle={{ background: "#3e497a", color: "#fff" }} icon={<FaUser />} >
                        <h1 className="vertical-timeline-element-title text-2xl">My Name is Tousif Tasrik</h1>
                        <p className='text-sm'>I am student of Dr Maleka  University and College.I read in 11th grade.I love to do programming . Everyday i build new projects .I know MongoDB🌿,Express Js🌍,React Js 💎 and Node Js 🌐</p>
                    </VerticalTimelineElement>
                </Roll>

                <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2019' iconStyle={{ background: "#3e497a", color: "white" }} >
                    <Zoom>
                        <h1 className="vertical-timeline-element-title">My Random High School Random Place Random State</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum consequuntur delectus corrupti fuga culpa nam modi soluta, dignissimos nulla numquam voluptates reiciendis fugiat aut consectetur? Est at soluta maiores sint aspernatur veritatis modi voluptatibus voluptates dolorem, inventore laborum! Error.</p>
                    </Zoom>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element--education' date='2018-2019' iconStyle={{ background: "#3e497a", color: "white" }} >
                    <Roll>
                        <h1 className="vertical-timeline-element-title">My Random High School Random Place Random State</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum consequuntur delectus corrupti fuga culpa nam modi soluta, dignissimos nulla numquam voluptates reiciendis fugiat aut consectetur? Est at soluta maiores sint aspernatur veritatis modi voluptatibus voluptates dolorem, inventore laborum! Error.</p>
                    </Roll>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    );
};

export default Portfolio;