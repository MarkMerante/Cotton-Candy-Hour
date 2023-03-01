import React from 'react'
import '../App.css'
import { useState } from "react";
import "./TabView.css"

function TabView() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {setToggleState(index);}

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                Description
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                Care Instructions
                </button>
            </div>

            <div className="content-tabs">
                <div
                  className={toggleState === 1 ? "content  active-content" : "content"}
                >
                  <h2>Description</h2>
                  <hr />
                  <p>
                    Stuff about the other flavours.
                  </p>
                </div>

                <div
                  className={toggleState === 2 ? "content  active-content" : "content"}
                >
                  <h2>Care Instructions</h2>
                  <hr />
                  <p>
                    Pre-packaged cotton candy is typically best eaten within 2 weeks if unopened.
                  </p>
                  <p>
                    If a cotton candy tub has been opened, ensure container is properly sealed to prevent air from entering to delay hardening of the sugar.
                    This is best eaten within 3 days
                  </p>
                  <p>
                    Keep at room temperature or slightly cool, but do not keep in heat or extreme cold for long periods
                    of time. Minimizing exposure will maintain top quality and increase the longevity of freshness.
                  </p>
                </div>
            </div>
        </div>
    )
}

export default TabView