import React, {useEffect, useState} from "react";

interface logoType {
    width: number;
    height: number;
    isDwarf: boolean;
}

function Logo({width = 50, height = 50, isDwarf = true}: logoType) {
    const lineFill = isDwarf ? '#565656' : '#fff';
    const bgFill = isDwarf ? '#fff' : '#565656';
    return (
        <div className="shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 99.149 99.159">
                <g id="g_387" transform="translate(-802 882)">
                    <g id="g_386">
                        <g id="g_385">
                            <path id="p_869"
                                  d="M49.57.13A183.884,183.884,0,0,1,73.62.8,30.832,30.832,0,0,1,84.98,2.81,23.451,23.451,0,0,1,96.34,14.17a31.249,31.249,0,0,1,2.01,11.36c0,6.01.67,8.02.67,24.05a183.884,183.884,0,0,1-.67,24.05,30.832,30.832,0,0,1-2.01,11.36A23.451,23.451,0,0,1,84.98,96.35a31.249,31.249,0,0,1-11.36,2.01c-6.01,0-8.02.67-24.05.67a183.884,183.884,0,0,1-24.05-.67,30.832,30.832,0,0,1-11.36-2.01A23.451,23.451,0,0,1,2.8,84.99a31.082,31.082,0,0,1-2-11.37C.8,67.61.13,65.6.13,49.57A183.884,183.884,0,0,1,.8,25.52,30.832,30.832,0,0,1,2.81,14.16,23.96,23.96,0,0,1,7.49,7.48,11.287,11.287,0,0,1,14.17,2.8,31.249,31.249,0,0,1,25.53.79,185.439,185.439,0,0,1,49.57.13"
                                  transform="translate(802 -882)" fill={bgFill} fillRule="evenodd"/>
                            <g id="g_380" transform="translate(802 -882)">
                                <path id="p_870"
                                      d="M53.97,68.25a7.387,7.387,0,0,0-.54-1.18,4.762,4.762,0,0,0-1.34-1.38,4.449,4.449,0,0,0-3.46-.45,10.051,10.051,0,0,0-2.26.77,3.9,3.9,0,0,0-2.12,2.46,4.805,4.805,0,0,0,.28,2.85,11.677,11.677,0,0,0,.91,2.12,6.473,6.473,0,0,0,2,2.1,2.759,2.759,0,0,0,3.78-.99.689.689,0,0,0,.03-.08,8.858,8.858,0,0,0,1.37-.71,3.8,3.8,0,0,0,1.34-1.42,3.962,3.962,0,0,0,.46-2.03A6.674,6.674,0,0,0,53.97,68.25Z"
                                      fill='#f0a0b1'/>
                                <path id="p_871"
                                      d="M71.19,35.66c-1.11,0-2.22.5-2.22,1.81v11H28.17V35.25c.14-5.05,1.43-21.38,12.45-21.93a2.328,2.328,0,0,0-.23-4.65c-15.67.79-16.8,21.92-16.85,27.09h0V86.65c0,1.31,1.11,1.81,2.22,1.81,1.31,0,2.42-.5,2.42-1.81V52.61h40.8V86.66c0,1.31,1.11,1.81,2.22,1.81,1.31,0,2.42-.5,2.42-1.81V37.47C73.61,36.16,72.5,35.66,71.19,35.66Z"
                                      fill={lineFill}/>
                                <path id="p_872"
                                      d="M54.67,67.34a1.66,1.66,0,0,0-2.35.03L48.6,71.19l-3.72-3.82a1.662,1.662,0,1,0-2.38,2.32l4.44,4.56v3.39a1.66,1.66,0,1,0,3.32,0V74.25l4.44-4.56A1.651,1.651,0,0,0,54.67,67.34Z"
                                      fill={lineFill}/>
                                <circle id="c_16" cx="1.68" cy="1.68" r="1.68"
                                        transform="translate(32.1 59.29)" fill={lineFill}/>
                                <circle id="c_17" cx="1.68" cy="1.68" r="1.68"
                                        transform="translate(61.7 59.29)" fill={lineFill}/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}


export default Logo;