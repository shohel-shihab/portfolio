"use client";

import SkillCard from "./SkillCard";

import {
FaReact,
FaNodeJs,
FaGitAlt,
} from "react-icons/fa";

import {
SiNextdotjs,
SiJavascript,
SiTailwindcss,
SiExpress,
SiMongodb,
SiTypescript,
SiPostman,
SiGithub,
SiVercel,
} from "react-icons/si";

const frontend = [
{
title:"React",
icon:<FaReact />,
color:"text-cyan-400",
percent:95,
},
{
title:"Next.js",
icon:<SiNextdotjs />,
color:"text-white",
percent:90,
},
{
title:"JavaScript",
icon:<SiJavascript />,
color:"text-yellow-400",
percent:95,
},
{
title:"Tailwind",
icon:<SiTailwindcss />,
color:"text-sky-400",
percent:92,
},
];

const backend = [
{
title:"Node.js",
icon:<FaNodeJs />,
color:"text-green-500",
percent:90,
},
{
title:"Express",
icon:<SiExpress />,
color:"text-gray-200",
percent:88,
},
{
title:"MongoDB",
icon:<SiMongodb />,
color:"text-green-400",
percent:90,
},
{
title:"TypeScript",
icon:<SiTypescript />,
color:"text-blue-500",
percent:80,
},
];

const tools = [
{
title:"Git",
icon:<FaGitAlt />,
color:"text-orange-500",
percent:90,
},
{
title:"GitHub",
icon:<SiGithub />,
color:"text-white",
percent:92,
},
{
title:"Postman",
icon:<SiPostman />,
color:"text-orange-400",
percent:88,
},
{
title:"Vercel",
icon:<SiVercel />,
color:"text-white",
percent:90,
},
];

export default function Skills(){

return(

<section
id="skills"
className="py-28"
>

<div className="section-container">

<div className="text-center">

<p className="text-violet-400 uppercase tracking-[4px] font-semibold">
My Skills
</p>

<h2 className="mt-3 text-5xl font-black">
Technologies I Work With
</h2>

<p className="mt-6 text-gray-400 max-w-2xl mx-auto">
I enjoy building modern full-stack applications using
the MERN ecosystem and continuously learning new
technologies to improve performance, scalability,
and user experience.
</p>

</div>

{/* Frontend */}

<h3 className="mt-20 mb-8 text-3xl font-bold">
Frontend
</h3>

<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

{frontend.map((skill,index)=>(

<SkillCard
key={index}
{...skill}
/>

))}

</div>

{/* Backend */}

<h3 className="mt-16 mb-8 text-3xl font-bold">
Backend
</h3>

<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

{backend.map((skill,index)=>(

<SkillCard
key={index}
{...skill}
/>

))}

</div>

{/* Tools */}

<h3 className="mt-16 mb-8 text-3xl font-bold">
Tools
</h3>

<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

{tools.map((skill,index)=>(

<SkillCard
key={index}
{...skill}
/>

))}

</div>

</div>

</section>

)

}