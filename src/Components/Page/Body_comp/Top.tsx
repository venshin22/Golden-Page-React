import { useState } from 'react';

export default function Top() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
    return(
        <div className="flex w-full p-6 items-center justify-center border border-y-gray-200 border-x-0">
            <div 
                className="mx-4"
                style={{ perspective: "600px" }}
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div
                    className="transition-all duration-500 relative"
                    style={{ 
                        transformStyle: "preserve-3d",
                        transform: hoveredIndex === (0) 
                            ? "rotateY(-15deg) rotateX(0deg)" 
                            : "rotateY(0) rotateX(0)"
                    }}
                >
                    <div style={{ backfaceVisibility: "hidden" }}>
                        <img src="\assets\web_dev.png" alt="webDev" className="shadow-xl"/>
                    </div>
                </div>
            </div>
            
            <div 
                className="mx-4"
                style={{ perspective: "500px" }}
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div
                    className="transition-all duration-500 relative"
                    style={{ 
                        transformStyle: "preserve-3d",
                        transform: hoveredIndex === 1 
                            ? "rotateY(15deg) rotateX(0deg)" 
                            : "rotateY(0) rotateX(0)"
                    }}
                >
                    <div style={{ backfaceVisibility: "hidden" }}>
                        <img src="\assets\ol_marketing.png" alt="olMarketing" className='shadow-xl'/>
                    </div>
                </div>
            </div>
            
            <div 
                className="mx-4"
                style={{ perspective: "700px" }}
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <div
                    className="transition-all duration-500 relative"
                    style={{ 
                        transformStyle: "preserve-3d",
                        transform: hoveredIndex === 2 
                            ? "rotateY(15deg) rotateX(0deg)" 
                            : "rotateY(0deg) rotateX(0)"
                    }}
                >
                    <div style={{ backfaceVisibility: "hidden" }}>
                        <img src="\assets\sales_optz.png" alt="slsOptimization" className='shadow-xl w-[50rem]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}