
import * as React from 'react';
import TagCloud from "TagCloud";

const texts = [
    'ReactJs', 'HTML', 'JavaScript',
    'CSS', 'NodeJs', 'Java',
    'Python', 'Terraform', 'Shell',
    'SpringBoot', 'Angular', 'FireStore',
];
export default function SkillCloud() {

    const IsTagCloudLoaded = React.useRef(false)
    React.useEffect(() => {
        if (IsTagCloudLoaded.current) return

        TagCloud('.tagcloud', texts, {
            radius: 300,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true,
        })

        IsTagCloudLoaded.current = true
    }, [])

    return (<div className='flex bg-[var(--bg-color)]'>
        <div className='flex-grow'></div>
        <div className="tagcloud">
        </div>
        <div className='flex-grow'></div>
    </div>);
}