import React, { useRef, useState, useEffect } from "react";
import "./Article.css";
import axios from "axios";
import {AiOutlineClose} from 'react-icons/ai'

export default function Article({ article, setShowArticle, showArticle}) {
  //const {title, setTitle} = useState(null);

  /*
    if(article !== null){
        article.map((e)=>{
            console.log(e.title)
            setTitle(e.title)
        })
    }*/

  useEffect(() => {}, []);

  return (
    <>
    {showArticle ?(
    <div class="container">
      <div class='modalHeader'>
        <a href='#' className='closeIcon'>
          <AiOutlineClose onClick={()=> setShowArticle(prev => !prev)}/>
        </a>
      </div>
      <section>
        {article !== null
          ? article.map((e, i) => {
              const { title, urlToImage, author, description, content, url } =
                e;

              return (
                <article key={title.replace(/[ ]/g, "-")}>
                  <div>
                    <h1>{title}</h1>
                    {description !== null && description.includes("<p>")
                      ? description.replace(/<p[^>]*>/g, "")
                      : description}
                    <span>{author}</span>
                    <img src={urlToImage} />
                    <p>{content}</p>
                    <a href={url}>Read Article</a>
                  </div>
                  <hr/>
                </article>
                
              );
            })
          : null}
      </section>
    </div>

    )
  :null
  }
  </>
  )

}
