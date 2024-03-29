import React from 'react';

import { dumpLogs } from './utils';

import classes from './BlogCard.module.css';

const BlogCard = (props) => {




    // onLikeBtnClick = ()=>{
    //     this.setState((prevState, prevProp)=>{
    //         return {likeCount: prevState.likeCount+1}
    //     });
    // }


    // dumpLogs(props); 

    console.log('Blog Card Rendered');

    return (
        <div className={classes.BlogCard}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <p>Like Count: <span className={classes.LikeCount}>{props.likeCount}</span></p>
            <button onClick={props.onLikeBtnClick}>Like</button>
        </div>
    )
      
}

export default BlogCard;