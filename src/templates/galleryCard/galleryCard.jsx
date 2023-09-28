import './galleryCard.css'

export default function galleryCard({imageUrl}){

    return <>
        <div id="card1s">
  <div className="card1" data-color="blue">
    <img className="card1-front-image card1-image" src={imageUrl} />
    <div className="card1-faders">
        {Array(8).fill(imageUrl).map((img,index)=>{return <img key={index} className="card1-fader card1-image" src={img} />})}
    </div>
  </div>
  
</div>
    </>
}