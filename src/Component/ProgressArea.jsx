import React from 'react'

const ProgressArea = () => {
  return (
    <div>
        <section className="progress-wrap-layout1 section-padding-12">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 col-12">
                        <div className="progress-box-layout1">
                            <h2 className="item-title">All of our Specialists are Fully Trained</h2>
                            <div className="item-content">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="counter-item">
                                            <div className="counter count-number" data-num="159">159</div>
                                            <div className="count-title">Project Done</div>
                                            <div className="bg-icon"><i className="far fa-thumbs-up"></i></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="counter-item">
                                            <div className="counter count-number" data-num="1900">1900</div>
                                            <div className="count-title">Happy Clients</div>
                                            <div className="bg-icon"><i className="far fa-smile"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </div>
  )
}

export default ProgressArea