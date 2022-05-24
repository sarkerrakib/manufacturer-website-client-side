import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h2 className='text-center my-10 text-3xl font-bold'>BLOGS</h2>
            </div>
            <div className='container mx-auto px-14'>
                <div className="border border-primary p-3 rounded">
                    <div className='fw-bolder text-xl font-bold '>
                        1. How will you improve the performance of a React Application? <br />

                    </div>
                    <div className="text-lg">
                        Ans:- <br />
                        <b></b>
                        Great execution is significant for any application or item. While working with React Native, you may frequently deal with issues with the presentation of your application. That is the reason you really want to focus on the prescribed procedures and execution upgrades for your React Native application during its improvement so you can fix these issues and convey an immaculate encounter to the end clients. we can utilize a few procedures to accelerate the application:

                        By adding a bolt work in a class, we add it as an item and not as the model property of the class. What's more, assuming we utilize the part at different times, there will be different occurrences of these capacities inside each object of the part. The most dependable method for utilizing capacities is to tie them with the constructor.

                        The program frequently contributes a ton of time delivering, when styles are suggested inline. Prearranging and delivering take time on the grounds that the program needs to arrange for all the React style rules to the CSS properties. Making a different style.js document and bringing it into the part is a quicker strategy.

                        Keep away from additional labels by utilizing React parts: Using respond sections diminishes the no. of extra labels and fulfills the need of having a solitary parent component in the part.

                        Making capacities in render() is a terrible practice that can prompt some genuine execution issues. Each time a part re-delivers, an alternate callback is made. This probably won't be an issue for basic and more modest parts, yet it is a major issue for PureComponents and React.memo() or when the capacity is passed as a prop to a youngster part, which would bring about pointless re-renders.
                    </div>
                </div>


                <br />
                <br />

                {/* second question */}

                <div className="border border-primary p-3 rounded">
                    <div className='fw-bolder text-xl font-bold'>
                        2. What are the different ways to manage a state in a React application?<br />
                    </div>
                    <div className="text-lg">
                        Ans:- <br />
                        Each React part has an implicit state. This state is an item which stores the property estimations that have a place with a part. State can keep information from various parts in-a state of harmony on the grounds that each state update re-delivers every important part.

                        The underlying way that React accommodates setting part states is by utilizing setState() and adding "neighborhood state" to a class. There are a few alternate ways of overseeing state s in React, including the utilization of:<br />

                        -Snares <br />
                        -Respond Context API <br />
                        -Apollo Link State <br />

                        The implicit setState() strategy refreshes a variable's worth in the classes' nearby store. This nearby store permits the refreshed variable qualities to be gotten to by any capacity that might require these qualities.

                        setState() tells React that this part and its kids (some of the time postponed and gathered into a solitary cluster) ought to be re-delivered with the most refreshed express; this re-render is in many cases in view of client set off occasions

                        Information state covers data that your React application stores briefly for different business capacities. Evidently, you are building a venture the executives application. The data put away in the information state will incorporate the accompanying things - project names, contacts, insights concerning the clients, and so forth.

                        The Data state will get all the data from the external world. Be that as it may, how might it recognize which data is what and regardless of whether it should be put away in the information state?

                        Indeed, every snippet of data will have an identifier that will assist the Data with expressing perceive and demand for specific data that it can store.

                        Each part of gotten information has a sort and a selector which indicates the sort of information got. You can plan a revival store for your information whenever you have delineated a method for distinguishing the sort and id of a got object.

                        In opposition to the state referenced above in a React application, the control state doesn't address the application's current circumstance. All things considered, it alludes to the state which the client has input into the application. For instance, structure inputs, chose things, and so on. Control state is known to be more different and flexible with regards to putting away data.

                        While structure inputs are a gigantic heap of data with numerous items set up, chose things go about as a solitary line of data addressing an Id, and the control state proficiently stores the two sorts of information easily.
                    </div>
                </div>


                <br />
                <br />

                {/* thirt question */}

                <div className="border border-primary p-3 rounded">
                    <div className='fw-bolder text-xl font-bold'>
                        3. How does prototypical inheritance work? <br />
                    </div>
                    <div className="text-lg">
                        Ans:- <br />
                        prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                        Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain how prototype chains work and look at how the prototype property can be used to add methods to existing constructors.

                        When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                        The call() allows for a function/method belonging to one object to be assigned and called for a different object. call() provides a new value of this to the function/method. With call() , you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.
                        JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object.

                    </div>
                </div>


                <br />
                <br />

                {/* forth question */}

                <div className="border border-primary p-3 mb-5 rounded">
                    <div className='fw-bolder text-xl font-bold'>
                        4. What is the purpose of jwt and how does it work. <br />
                    </div>
                    <div className="text-lg">
                        Ans:- <br />
                        Unit testing includes testing individual parts of the product program or application. The fundamental reason behind this is to make sure that every one of the singular parts are functioning as planned. A unit is known as the littlest conceivable part of programming that can be tried. By and large, it has a couple of information sources and a solitary result.
                        The primary target of unit testing is to guarantee that every individual part is functioning admirably and as it should work. The whole framework may have the option to function admirably in the event that the singular parts are functioning admirably. Unit testing is performed by the product engineers themselves. Once in a while, free programming analyzers likewise play out these tests.

                        There are two primary kinds of unit testing: manual and robotized. The mechanized technique is the most liked as it is quicker and more exact, yet playing out this undertaking physically is additionally a choice. The manual methodology has a bit by bit informative strategy that assists analyzers with playing out this undertaking effectively. The computerized unit testing as a rule includes the designer first composing a part of the code in the application with the goal that the capacity can be tried.

                        From that point onward, when the application is conveyed, they eliminate the test code. They can likewise seclude the capacity to test it in a more exhaustive manner. This assists with recognizing any reliance that may be there between the tried code and different information spaces. These conditions can then be disposed of.
                        <br />
                        To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:<br />
                        -Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.<br />
                        -Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.<br />
                        -Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.<br />
                        -Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.


                    </div>
                </div>

                {/* fifth question */}

                <div className="border border-primary p-3 mb-5 rounded">
                    <div className='fw-bolder text-xl font-bold'>
                        5. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts <br />
                    </div>
                    <div className="text-lg">
                        Ans:- <br />
                        In the event that we attempt to set the state straightforwardly, it won't re-render the component.Instead use setState() technique. It plans an update to a part's state object. At the point when state changes, the part answers by re-delivering.
                        This is an impractical notion for two reasons (despite the fact that it would work in this model, and numerous others).

                        (different examples to stay away from are things like this.state.something = x and this.state = x)

                        Transforming state straightforwardly can prompt odd bugs, and parts that are difficult to improve. Here is a model.

                        As you may definitely be aware, a typical method for tuning a React part for execution is to make it "unadulterated," which makes it just re-render when its props change (rather than each time its parent re-renders). This should be possible naturally by expanding React.PureComponent rather than React.Component, or physically by carrying out the shouldComponentUpdate lifecycle strategy to contrast nextProps and current props. In the event that the props appear to be identical, it avoids the render, and saves some time.

                    </div>
                </div>




            </div>
        </div>
    );
};

export default Blog;