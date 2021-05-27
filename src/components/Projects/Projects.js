import {Grid} from '@material-ui/core';
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {GitHub} from '@material-ui/icons';
import './Projects.css';
import images from '../../assets/img2.png';
import Business from '../../assets/business.png';
import Todo from '../../assets/todo.png';
import LanguageIcon from '@material-ui/icons/Language';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div className="tit">PROJECTS</div>
                <Grid container>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className="card1">
                            <CardActionArea>
                                <CardMedia className="image1" image={Business}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Business Card
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p">
                                        Its a visitor card using Adobe Xd
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <div>
                                    <Button
                                        href="https://www.behance.net/gallery/119209427/Business-Card?tracking_source=project_owner_other_projects"
                                        target="_blank"
                                        startIcon={<LanguageIcon/>}
                                        variant="text"
                                        color="#727272">
                                        Learn More{' '}
                                    </Button>
                                </div>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card className="card2">
                            <CardActionArea>
                                <CardMedia className="image2" image={Todo}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Todo App
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        It's a todo app created using React
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <div>
                                    <div>
                                        <Button
                                            href="https://github.com/pujasharma5431/React_TodoApp"
                                            target="_blank"
                                            startIcon={<GitHub/>}
                                            variant="text"
                                            color="#727272">
                                            Git{' '}
                                        </Button>
                                    </div>
                                </div>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card className="card3">
                            <CardActionArea>
                                <CardMedia className="image3" image={images}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Cafe Website
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p">
                                        Cafe Website created using Adobe Xd
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    href="https://www.behance.net/gallery/119620205/CafeWebsite?tracking_source=project_owner_other_projects"
                                    target="_blank"
                                    startIcon={<LanguageIcon/>}
                                    variant="text"
                                    color="#727272">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className="card4">
                            <CardActionArea>
                                <CardMedia className="image4" image={images}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Portfolio
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p">
                                        Portfolio careated using React
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    href="https://github.com/pujasharma5431/React-Portfolio"
                                    target="_blank"
                                    startIcon={<GitHub/>}
                                    variant="text"
                                    color="#727272">
                                    Git
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <div></div>
            </div>
        );
    }
}
