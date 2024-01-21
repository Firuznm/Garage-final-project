// import style css
import style from  "../styles/TitleList.module.scss"
 

function TitleList({yellowTitle,whiteTitle, myWriteStyle}) {

  return (
	<div id="titleList" className={style.titleList}>
	  <h4 style={{marginBottom:myWriteStyle}} className={style.yellowTitle}>{yellowTitle}</h4>
	   <h2 className={style.whiteTitle}>{whiteTitle}</h2>
	   <div className={style.xWrapper}>
		<span className={style.leftLine}></span> 
		<span className={style.Xlogo}>x</span> 
		<span className={style.rightLine}></span>
		</div>
	</div>
  )
}

export default TitleList
