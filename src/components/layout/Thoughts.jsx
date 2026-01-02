import React from 'react'

function Thoughts() {
  return (
    <section class="thoughts_container">

            <h4 class="thoughts_title title">Recent Thoughts</h4>

            <div class="thoughts_textArea">
                
 {/* create 5 div, 2 para each  */}

                <div class="thought">
                    <p class="thought_date">8/15/2025</p>
                    <p class="thought_title">Thoughts On Agentic Coding</p>

                </div>

                <div class="thought">
                    <p class="thought_date">1/06/2024</p>
                    <p class="thought_title">Learning to walk without a crutch</p>
                </div>

                <div class="thought">
                    <p class="thought_date">12/28/2023</p>
                    <p class="thought_title">2024</p>
                </div>

                 <div class="thought">
                    <p class="thought_date">10/04/2022</p>
                    <p class="thought_title">Interesting AI Articles & Links</p>
                </div>

                <div class="thought">
                    <p class="thought_date">1/29/2022</p>
                    <p class="thought_title">The "best" way to manage icons in React.js</p>
                </div>


            </div>

        
            <div class="more_link"><a href="">More &rarr;</a></div>
        


        </section>
  )
}

export default Thoughts