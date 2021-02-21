import React, {Component} from 'react';
import SectionTitleTwo from '../component/Banner/SectionTitleTwo';
class ClientslogoTwo extends Component {
    render(){
        return(
            <div className="clients_logo_area_two bg_color">
                <div className="c_round"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="clients_content_two">
                                <SectionTitleTwo stitle="My great Partners" btitle="Some of Great companies portfolios discribe."/>
                                <p>Cack brolly butty grub chancer smashing brilliant vagabond, chimney pot blower such a fibber ummm I'm telling chinwag he lost his bottle nancy boy.</p>
                                <div className="clients_item">
                                    <h2>1K</h2>
                                    <h6>Total Clients</h6>
                                </div>
                                <div className="clients_item">
                                    <h2>50</h2>
                                    <h6>Sponsers</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="clients_intrigration">
                                <a href=".#" className="c_items"><img src={require('../image/asan.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/slack.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/Avast.png')} alt=""/></a>
                                <a href=".#" className="c_items middle"><img src={require('../image/h_pijom1.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/torrent.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/cool.png')} alt=""/></a>
                                <a href=".#" className="c_items"><img src={require('../image/twitter.png')} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClientslogoTwo;