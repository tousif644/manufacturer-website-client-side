import React from 'react';
import Footer from '../Shared/Footer';
import Blogs from './Blogs';
const BlogContent = () => {
    return (
        <>
            <h1 className='text-4xl font-bold underline text-center'>Blogs Section</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2 mx-5 gap-5 items-center bg-white'>
                <Blogs title="How does prototypical inheritance work?" description="The ability to access object properties from another object is known as prototype inheritance. To add new attributes and methods to an existing object constructor, we utilize a JavaScript prototype. We may instruct our JS code to inherit attributes from a prototype in this way. Through a reference pointer function, prototypical inheritance allows us to reuse attributes or methods from one JavaScript object to another."></Blogs>


                <Blogs title="What are the different ways to manage a state in a React application?" description="When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:"></Blogs>


                <Blogs title="How will you improve the performance of a React Application?" description="When it's required, keep component state local. To avoid unwanted re-renders, memorize React components. Code-splitting in React using dynamic import(). And also To optimize React rendering, you need to make sure that components receive only necessary props"></Blogs>

                <Blogs title="What is a unit test? Why should write unit tests?" description="The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages."></Blogs>

                <Blogs title="Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts" description="One should never update the state directly because If you update it directly, calling the setState() afterward may just replace the update you made and later when you want to update the state, it doest not the change the state immediately"></Blogs>

            </div>
            <Footer />
        </>
    );
};

export default BlogContent;