import Head from 'next/head'
import {useEffect, useRef, useState} from 'react'

import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ImageScrollAnimation = () => {

const imageViewer = useRef(null)
const imageScene = useRef(null)
console.log('imageID', imageViewer)

// if (process.client) {
// }
gsap.registerPlugin(ScrollTrigger)


let frame_count = 9
let offset_value = 100

gsap.to(imageViewer.current, {
// backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
// ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
scrollTrigger: {
trigger: imageScene.current,
start: "top top",
end: "+=" + (frame_count * offset_value),
pin: true,
scrub: true
}
})



return (
<>
<Head>
<title>TalkingSkunk | Home</title>
<meta name='keywords' content='talkingskunk' />
<link rel="icon" href="/favicon.ico" />
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"></script> */}
</Head>

<div className={`${styles.header} ${styles.section}`}>
<div className={styles.center}>&darr;START</div>
</div>

<p className={styles.bgText}>
Discover
</p>
<div ref={imageScene} className={`${styles.scene} ${styles.section}`} id="sticky">
<div ref={imageViewer} className={styles.viewer}></div>
</div>

<div className={styles.section}>
<div className={styles.center}>End</div>
</div>

<div className={styles.canvas}>

</div>




<div className={styles.body}>

</div>

</>
)
}

export default ImageScrollAnimation;