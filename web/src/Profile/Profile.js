import React from 'react';
import './Profile.css';
import Avatar from './Avatar.js';
import '../utils.css'

const ProfileItem=(props)=>
{
    return (
        <div className='ProfileItem-Container u-textCenter'>
            <h4 className='ProfileItem-Title'>
                {props.title}
            </h4>
            <div className='ProfileItem-Content'>
                {props.content}
            </div>
        </div>
    );
}
const Profile=(props)=>
{
    return (
        <div className='Profile-Container'>
            <div className='Profile-Avatar'>
                <Avatar/>
            </div>
                <div className='Profile-Name u-textCenter'>
                    玛卡巴卡
                </div>
                <hr className='ProfileLine'/>
                <div className='ProfileItem u-flex'>
                   <ProfileItem title={'About Me'} content={'这个人很懒，还没有写简介'}/>
                   <ProfileItem title={'Personal Hobby'} content={'第一个爱好是吃饭，第二个是睡觉'}/>
                </div>
             
        </div>
    );
};
export default Profile;