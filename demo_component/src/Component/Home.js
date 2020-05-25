import React, { Component } from 'react';

import News from './News';
import dulieu from './dulieu.json';

class Home extends Component {
    render() {


        return (
            <div className="container">
                <div className="row">
                    
                    {
                        dulieu.map((value, key) => {
                            return (
                                <News key={key}
                                chitietID={value.id}
                                 tieude={value.title} trichdan={value.quote} anh={value.image}/>
                               
                            )

                        })
                    }

                </div>
            </div>
        );
    }
}

export default Home;