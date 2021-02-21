import React , {Component} from 'react';
import SectionTitleTwo from '../Banner/SectionTitleTwo';
import BlogTwoitems from '../Blog/BlogTwoitems';
import Reveal from 'react-reveal/Reveal/';
class BlogTwo extends Component{
    render(){
        return(
            <section className="blog_area_two" id="blog">
                <div className="container">
                    <SectionTitleTwo tCenter="text-center" stitle="Our Blog" btitle="News and Updates"/>
                    <Reveal effect="fadeInUp" duration={1000}>
                        <div className="row">
                            <BlogTwoitems bTitle="Contrary to popular belief" bDetails="Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam.." btnText="Read More" image="post-img1.jpg" Pdata="Jan 14"/>
                            <BlogTwoitems bTitle="Behind the color" bDetails="Suspendisse in mattis neque, sed accu- msan erat. Maecenas eget metus dui. Vestibulum accumsan massa quam.." btnText="Read More" image="post-img2.jpg" Pdata="Mar 30"/>
                        </div>
                    </Reveal>
                </div>
            </section>
        )
    }
}
export default BlogTwo;