import React from 'react'
type CommonTitleProps = {
  content1?: string;
  content2?: string;
  content3?: string;
    style_div?: string;
    style_h?: string;
    style_p?: string;
}

const CommonTitle = ({content1,content2,content3, style_div,style_h,style_p}:CommonTitleProps) => {
  return (
      <>
        <div className={`${style_div}`}>
            {content1}
        </div>
        <h2 className={`${style_h}`}>{content2}</h2>
        <p className={`${style_p}`}>
           {content3}
        </p>
      </>
  )
}

export default CommonTitle