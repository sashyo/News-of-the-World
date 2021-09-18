import React, { useRef, useState, useEffect } from "react";
import "./Article.css";
import axios from "axios";
<<<<<<< Updated upstream

export default function Article({ article }) {
  //const {title, setTitle} = useState(null);
=======
import { AiOutlineClose } from 'react-icons/ai'

export default function Article({ article, setShowArticle, showArticle }) {
>>>>>>> Stashed changes

  useEffect(() => { }, []);

  return (
<<<<<<< Updated upstream
    <div class="container">
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
  );
=======
    <>
      {showArticle ? (
        <div class="container">
          <div class='modalHeader'>
            <a href='#' className='closeIcon'>
              <AiOutlineClose onClick={() => setShowArticle(prev => !prev)} />
            </a>
          </div>
          <section>
            {article !== null && article.length > 0
              ? article.map((e, i) => {
                const { title, urlToImage, author, description, content, url } =
                  e;

                return (
                  <article key={title.replace(/[ ]/g, "-")}>
                    <div>
                      <h1>{title}</h1>
                      <p>{description}</p>
                      <span>{author}</span>
                      <img src={urlToImage} alt=""/>
                      <p>{content}</p>
                      <a href={url}>Read Article</a>
                    </div>
                    <hr />
                  </article>

                );
              })
              : <div className="container">
                <h1>
                  Selected Country is not supported, please select another country
                </h1>
                <div class='modalHeader'>
                  <a href='#' className='closeIcon'>
                    <AiOutlineClose onClick={() => setShowArticle(prev => !prev)} />
                  </a>
                </div>
              </div>}
          </section>
        </div>

      )
        : null
      }
    </>
  )

>>>>>>> Stashed changes
}
