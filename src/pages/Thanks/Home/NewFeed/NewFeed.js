import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Media } from "reactstrap";
import "../../../../assets/scss/custom/pages/thanks/post-thanks.scss";

//Import Image
import avatar2 from "../../../../assets/images/users/avatar-1.jpg";
import img2 from "../../../../assets/images/small/img-2.jpg";

//Import Breadcrumb
import Breadcrumbs from '../../../../components/Common/Breadcrumb';
import {CardImg} from "reactstrap/es";

const NewFeed = (props) => {

    return (
        <React.Fragment>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Thông báo mới" breadcrumbItem="" />

            <Card>

                <CardBody>
                    <Media className="mb-4">
                        <img className="d-flex mr-3 rounded-circle avatar-sm" src={avatar2} />
                        <Media body>
                            <div className="thank-people">
                                <h5 className="font-size-14 mt-1">Humberto D. Champion</h5>
                                <p className="font-size-5 m-1"> đã gửi lời cảm ơn tới </p>
                                <h5 className="font-size-14 mt-1">Trần Thanh Tùng</h5>
                            </div>
                            <small className="text-muted">(thời gian)</small>
                        </Media>
                    </Media>

                    <h4 className="mt-0 font-size-16">This Week's Top Stories</h4>

                    <p>Dear Lorem Ipsum,</p>
                    <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.
                    </p>
                    <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                    <p>Sincerly,</p>
                    <hr />

                    <Row>
                        <CardImg className="img-fluid" src={img2} />
                    </Row>
                </CardBody>

            </Card>

            <Card>

                <CardBody>
                    <Media className="mb-4">
                        <img className="d-flex mr-3 rounded-circle avatar-sm" src={avatar2} />
                        <Media body>
                            <div className="thank-people">
                                <h5 className="font-size-14 mt-1">Humberto D. Champion</h5>
                                <p className="font-size-5 m-1"> đã gửi lời cảm ơn tới </p>
                                <h5 className="font-size-14 mt-1">Đặng Thế Hưng</h5>
                            </div>
                            <small className="text-muted">(thời gian)</small>
                        </Media>
                    </Media>

                    <h4 className="mt-0 font-size-16">This Week's Top Stories</h4>

                    <p>Dear Lorem Ipsum,</p>
                    <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.
                    </p>
                    <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                    <p>Sincerly,</p>
                    <hr />

                    <Row>
                        <CardImg className="img-fluid" src={img2} />
                    </Row>
                </CardBody>

            </Card>

            <Card>

                <CardBody>
                    <Media className="mb-4">
                        <img className="d-flex mr-3 rounded-circle avatar-sm" src={avatar2} />
                        <Media body>
                            <div className="thank-people">
                                <h5 className="font-size-14 mt-1">VietED</h5>
                                <p className="font-size-5 m-1"> đã đăng một tin mới </p>
                            </div>
                            <small className="text-muted">(thời gian)</small>
                        </Media>
                    </Media>

                    <h4 className="mt-0 font-size-16">This Week's Top Stories</h4>

                    <p>Dear Lorem Ipsum,</p>
                    <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus convallis.
                    </p>
                    <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                    <p>Sincerly,</p>
                    <hr />

                    <Row>
                        <CardImg className="img-fluid" src={img2} />
                    </Row>
                </CardBody>

            </Card>
        </React.Fragment>
    );
}

export default NewFeed;