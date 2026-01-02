import React from 'react'

function Experiment() {
  return (
    <section class="experiment_container">
        <h4 class="experiment_title title">Experiment</h4>

        {/* <!-- for experiment pix --> */}
        <div class="experiment_pictureCards">

             {/* <!-- Experiment color 1st image card --> */}
              <div class="experiment_pictureCard"> 
                <div class="experiment_topicDiv">

                    <p class="experiment_topic">Game of Life</p>
                    <p class="experiment_details">
                        Conway's game of life starting with a glider gun.
                    </p>
                </div>    
                
                <div class="experiment_imageDiv">
                    <img src="./images/ben-image1.jpg" alt="" class="experiment_image"/>
                </div>

             </div> 
             

             {/* <!-- Experiment color 2nd image card --> */}
             <div class="experiment_pictureCard colorBorder">
                <div class="experiment_topicDiv">

                    <p class="experiment_topic">Image Color Extraction</p>
                    <p class="experiment_details">
                        Click Image upload your own (or try random)
                    </p>
                </div>    
                
                <div class="experiment_imageDiv">
                    <img src="./images/ben-image1.jpg" alt="" class="experiment_image"/>
                </div>

                <div class="experiment_colors" onclick="applyColor(event)">

                    <div class="experiment_color" >
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>
 
                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>

                    <div class="experiment_color">
                        <div class="experiment_colorBtn"></div>
                    </div>


                </div>

             </div>

             

        </div>

        <div class="more_link"><a href="">More &rarr;</a></div>

    </section>
  )
}

export default Experiment