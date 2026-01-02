import React from 'react'

function Experiment() {
  return (
    <section className="experiment_container">
        <h4 className="experiment_title title">Experiment</h4>

        {/* <!-- for experiment pix --> */}
        <div className="experiment_pictureCards">

             {/* <!-- Experiment color 1st image card --> */}
              <div className="experiment_pictureCard"> 
                <div className="experiment_topicDiv">

                    <p className="experiment_topic">Game of Life</p>
                    <p className="experiment_details">
                        Conway's game of life starting with a glider gun.
                    </p>
                </div>    
                
                <div className="experiment_imageDiv">
                    <img src="./images/ben-image1.jpg" alt="" className="experiment_image"/>
                </div>

             </div> 
             

             {/* <!-- Experiment color 2nd image card --> */}
             <div className="experiment_pictureCard colorBorder">
                <div className="experiment_topicDiv">

                    <p className="experiment_topic">Image Color Extraction</p>
                    <p className="experiment_details">
                        Click Image upload your own (or try random)
                    </p>
                </div>    
                
                <div className="experiment_imageDiv">
                    <img src="./images/ben-image1.jpg" alt="" className="experiment_image"/>
                </div>

                <div className="experiment_colors" onclick="applyColor(event)">

                    <div className="experiment_color" >
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>
 
                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>

                    <div className="experiment_color">
                        <div className="experiment_colorBtn"></div>
                    </div>


                </div>

             </div>

             

        </div>

        <div className="more_link"><a href="">More &rarr;</a></div>

    </section>
  )
}

export default Experiment