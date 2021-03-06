import React from 'react';

const MyPortfolio = () => {
    return (
        <section className="font-jost hyphens-manual my-12">
            {/* <!-- Page --------------------------------------------------------------------------------------------------------> */}
            <div
                className="max-w-7xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white"
            >
                {/* <!-- Name ----------------------------------------------------------------------------------------------------> */}
                <header
                    className="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-8"
                >
                    <div className="block">
                        <h1 className="mb-0 text-5xl font-bold text-gray-750">
                            MD.Rakibul Islam
                        </h1>
                        {/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
                        <h2
                            className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish"
                        >
                            Full Stack Web Development
                        </h2>
                        {/* <!--Location ---------------------------------------------------------------------------------------------------------> */}

                        <h3
                            className="m-0 mt-2 ml-2 font-semibold text-md text-gray-550 leading-snugish"
                        >
                            Dhaka,Bangladesh
                        </h3>
                    </div>
                    {/* <!--   Initials Block         --> */}
                    <div
                        className="justify-between px-3 mt-0 mb-5 text-3xl font-bold leading-none text-gray-200 initials-container bg-gray-750 print:bg-black"
                        // style="padding-bottom: 1.5rem; padding-top: 1.5rem"
                    >
                        {/* <div className="text-center initial">T</div>
                        <div className="text-center initial">L</div>
                        <div className="text-center initial">H</div> */}
                    </div>
                </header>

                {/* <!-- Column --------------------------------------------------------------------------------------------------> */}
                <div
                    className="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance"
                >
                    {/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
                    <section className="pb-4 mt-4 first:mt-0">
                        {/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
                        <div className="break-inside-avoid">
                            <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
                                <ul className="list-inside pr-7">
                                    {/* <li
                                        className="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 print:"
                                    >
                                        <a href="https://thomasleonhighbaugh.me" className="group">
                                            <span
                                                className="mr-2 text-lg font-semibold text-gray-700 leading-snugish"
                                            >
                                                Portfolio:
                                            </span>
                                            thomasleonhighbaugh.me
                                            <span
                                                className="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:"
                                            >
                                                ???
                                            </span>
                                        </a>
                                    </li> */}
                                    <li
                                        className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                                    >
                                        <a href="https://github.com/Thomashighbaugh" className="group">
                                            <span
                                                className="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                                            >
                                                Github:
                                            </span>
                                            https://github.com/sarkerrakib
                                            <span
                                                className="inline-block font-normal text-black transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700 print:"
                                            >
                                                ???
                                            </span>
                                        </a>
                                    </li>

                                    <li
                                        className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                                    >
                                        <a href="mailto:thighbaugh@zoho.com" className="group">
                                            <span
                                                className="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                                            >
                                                Email:
                                            </span>
                                            rakibsarker1761@gmail.com
                                            <span
                                                className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                                            >
                                                ???
                                            </span>
                                        </a>
                                    </li>
                                    <li
                                        className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700"
                                    >
                                        <a href="tel:+8801950087566">
                                            <span
                                                className="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                                            >
                                                Phone:
                                            </span>
                                            +8801950087566
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </section>
                    {/* <!--Summary ----------------------------------------------------------------------------------------------------------> */}
                    {/* <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
                       
                        <div className="break-inside-avoid">
                            <h2
                                className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                            >
                                SUMMARY
                            </h2>

                            <section className="mb-2 break-inside-avoid">
                                <p className="mt-2 leading-normal text-gray-700 text-md">
                                    Full stack autodiadact with demonstrable capacity to assess
                                    and manage complex business needs and surmount obstacles in
                                    the way thereof thus producing refined and accessible work
                                    products.
                                </p>
                            </section>
                        </div>
                    </section> */}
                    {/* <!--Experience ------------------------------------------------------------------------------------------------------> */}
                    <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
                        {/* <!-- To keep in the same column -------------------------------------------------------------------------> */}
                        <div className="break-inside-avoid">
                            <h2
                                className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                            >
                                EXPERIENCE
                            </h2>
                            {/* <!--Job 1--> */}
                            <section className="mb-2 break-inside-avoid">
                                <header>
                                    <h3
                                        className="text-lg font-semibold text-gray-650 leading-snugish"
                                    >
                                        WordPress Web Developer
                                    </h3>
                                    <p className="leading-normal text-md text-gray-550">
                                        Jun 2020 &ndash; Present | Freelancer
                                    </p>
                                </header>
                                <ul className="mt-2.1 text-md text-gray-700 leading-normal">
                                    <li>
                                        <span
                                            className="transform -translate-y-px select-none text-gray-550"
                                        >
                                            &rsaquo;
                                        </span>
                                        proactively cultivated client relationships
                                    </li>
                                    <li>
                                        <span
                                            className="transform -translate-y-px select-none text-gray-550"
                                        >
                                            &rsaquo;
                                        </span>
                                        designed wordPress web experiences for clients
                                    </li>
                                    <li>
                                        <span
                                            className="transform -translate-y-px select-none text-gray-550"
                                        >
                                            &rsaquo;
                                        </span>
                                        actively engaged with clients about specifications and
                                        designs
                                    </li>
                                    <li>
                                        <span
                                            className="transform -translate-y-px select-none text-gray-550"
                                        >
                                            &rsaquo;
                                        </span>
                                        crafted literate, comprehensive source code
                                    </li>
                                    <li>
                                        <span
                                            className="transform -translate-y-px select-none text-gray-550"
                                        >
                                            &rsaquo;
                                        </span>
                                        provided commentary to improve maintainability
                                    </li>
                                    <li>
                                        <span
                                            className="transform -translate-y-px select-none text-gray-550"
                                        >
                                            &rsaquo;
                                        </span>
                                        fostered ongoing services to clients as requested or needed
                                    </li>
                                </ul>
                            </section>
                            {/* <!--                Additional Jobs Would Go Here--> */}
                        </div>
                    </section>
                    {/* <!--Education --------------------------------------------------------------------------------------------------------> */}
                    <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
                        {/* <!-- To keep in the same column --> */}
                        <div className="break-inside-avoid">
                            <h2
                                className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                            >
                                EDUCATION
                            </h2>
                            {/* <!-- school ---------------------------------------------------------------------------> */}
                            <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                                <header>
                                    <h3
                                        className="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
                                    >
                                        Shanto-Mariam University of Creative Technology
                                    </h3>
                                    <p className="leading-normal text-md text-gray-550">
                                        2019 &ndash;  | Bachelor of CSE
                                    </p>
                                </header>
                                <p className="mt-1 leading-normal text-md text-gray-650">
                                    <span
                                        className="font-semibold text-gray-700 text-md leading-snugish"
                                    >
                                        Major:
                                    </span>
                                     Computer Science & Engineering
                                </p>
                                {/* <p className="mt-1 leading-normal text-md text-gray-650">
                                    <span
                                        className="font-semibold text-gray-700 text-md leading-snugish"
                                    >
                                        Minor:
                                    </span>
                                    Economics
                                </p> */}
                                <p className="leading-normal text-gray-700 text-md">
                                    <span
                                        className="font-semibold text-gray-700 text-md leading-snugish"
                                    >
                                        GPA:
                                    </span>
                                    3.9
                                </p>
                            </section>
                            {/* <!--school 2---------------------------------------------------------------------------------------------> */}
                            <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                                <header>
                                    <h3
                                        className="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
                                    >
                                        Uttara High School & College
                                    </h3>
                                    <p className="leading-normal text-md text-gray-550">
                                        2017 &ndash; Passed | 
                                    </p>
                                </header>
                                <p className="mt-1 leading-normal text-md text-gray-650">
                                    <span
                                        className="font-semibold text-gray-700 text-md leading-snugish"
                                    >
                                        Group:
                                    </span>
                                    Science
                                </p>
                                <p className="mt-1 leading-normal text-md text-gray-650"></p>
                                <p className="leading-normal text-gray-700 text-md">
                                    <span
                                        className="font-semibold text-gray-700 text-md leading-snugish"
                                    >
                                        GPA:
                                    </span>
                                    5.0
                                </p>
                            </section>

                            {/* <!--school 3 ---------------------------------------------------------------------------------> */}
                            <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                                <header>
                                    <h3
                                        className="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
                                    >
                                        Milestone College
                                    </h3>
                                    <p className="leading-normal text-md text-gray-550">
                                    2015 &ndash; Passed | Certificate
                                    </p>
                                </header>
                                <p className="mt-1 leading-normal text-md text-gray-650">
                                    <span
                                        className="font-semibold text-gray-700 text-md leading-snugish"
                                    >
                                        Group:
                                    </span>
                                    Science
                                </p>
                            </section>
                        </div>
                    </section>
                    {/* <!--Projects ----------------------------------------------------------------------------------------------------------> */}
                    <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
                        <div className="break-inside-avoid">
                            {/* <!-- To keep in the same column --> */}
                            <h2
                                className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                            >
                                PROJECTS
                            </h2>
                            {/* <!--Project 1 ---------------------------------------------------------------------------------------------------------> */}
                            <section className="pb-4 mb-4 border-b-2 break-inside-avoid">
                                <header>
                                    <h3
                                        className="text-lg font-semibold text-gray-700 leading-snugish"
                                    >
                                        <a
                                            href="https://warehouse-ae41e.web.app/"
                                            className="group"
                                        >https://warehouse-ae41e.web.app/
                                            
                                            <span
                                                className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                                            >
                                                ???
                                            </span>
                                        </a><br/>
                                        <a
                                            href="https://lustrous-hamster-20fbe8.netlify.app/"
                                            className="group"
                                        >https://lustrous-hamster-20fbe8.netlify.app/
                                            
                                            <span
                                                className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                                            >
                                                ???
                                            </span>
                                        </a><br/>
                                        <a
                                            href="https://jsr-photography.web.app/"
                                            className="group"
                                        >https://jsr-photography.web.app/
                                            
                                            <span
                                                className="inline-block mr-3 font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                                            >
                                                ???
                                            </span>
                                        </a>
                                        <span
                                            className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700"
                                        >

                                            <a
                                                href="https://warehouse-ae41e.web.app/"
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </span>
                                    </h3>
                                    
                                </header>
                                
                            </section>
                            
                        </div>
                    </section>
                    {/* <!--Begin Skills -----------------------------------------------------------------------------------------------------> */}
                    <section className="pb-4 mt-4 first:mt-0">
                        {/* <!-- To keep in the same column --> */}
                        <div className="break-inside-avoid">
                            <h2
                                className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                            >
                                SKILLS
                            </h2>
                            {/* <!--Full Stack Development -------------------------------------------------------------------------------------------> */}
                            <section className="mb-2 break-inside-avoid">
                                <header>
                                    <h3
                                        className="text-lg font-semibold text-gray-700 leading-snugish"
                                    >
                                        Full Stack Web Development
                                    </h3>
                                </header>

                                <div className="my-1 last:pb-1">
                                    <ul
                                        className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1"
                                    >
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            HTML5
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            CSS3
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Bootstrap
                                        </li>

                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Tailwind.css
                                        </li>
                                        {/* <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            LESS
                                        </li> */}
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Javascript
                                        </li>

                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Typescript
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Node.js
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            JSX
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            React
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            React-Router
                                        </li>

                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Next.js
                                        </li>
                                        {/* <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Redux
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Vue
                                        </li> */}
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Express.js
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            NoSQL
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            MongoDB
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            MERN
                                        </li>
                                        {/* <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            PHP
                                        </li> */}
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-black leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            WordPress
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* <!--DevOps ------------------------ -------------------------------------------------------------------------------------------> */}

                            {/* <section className="mb-2 break-inside-avoid">
                                <header>
                                    <h3
                                        className="font-semibold text-gray-700 text-m leading-snugish"
                                    >
                                        DevOps
                                    </h3>
                                </header>
                                <div className="my-1 last:pb-1">
                                    <ul
                                        className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1"
                                    >
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Docker
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Docker-Compose
                                        </li>

                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Version Control
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Git
                                        </li>

                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            CI/CD
                                        </li>

                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            GitLab Pipelines
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Github Actions
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Jenkins
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            AWS
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Google Cloud
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Firebase
                                        </li>
                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Serverless Hosting
                                        </li>

                                        <li
                                            className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250"
                                        >
                                            Linux
                                        </li>
                                    </ul>
                                </div>
                            </section> */}
                        </div>
                    </section>
                </div>
                {/* <!-- end Column --> */}
            </div>
            {/* <!-- end Page --> */}
        </section>
    );
};

export default MyPortfolio;