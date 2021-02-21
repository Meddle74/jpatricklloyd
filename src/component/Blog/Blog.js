import React , {Component} from 'react';
import Sectiontitle from '../Banner/Sectiontitle';
import BlogItems from '../Blog/BlogItems';
import Reveal from 'react-reveal/Reveal/';
class Blog extends Component{
    render(){
        return(
            <section className="blog_area" id="blog">
                <div className="container">
                    <Sectiontitle Title="Our Blog" TitleP="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
                    <Reveal effect="fadeInUp" duration={1000}>
                        <div className="row">
                            <BlogItems bTitle="Contrary to popular belief" bDetails="Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam.." btnText="Read More" image="post-img1.jpg" Pdata="Jan 14"/>
                            <BlogItems bTitle="Behind the color" bDetails="Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam.." btnText="Read More" image="post-img2.jpg" Pdata="Mar 30"/>
                            <BlogItems bTitle="Post with sidebar" bDetails="Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam.." btnText="Read More" image="post-img3.jpg" Pdata="Apr 04"/>
                        </div>
                    </Reveal>
                </div>
            </section>
        )
    }
}
export default Blog;