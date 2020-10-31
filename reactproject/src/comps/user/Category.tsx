import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CategoryData from '../../interfaces/CategoryData';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Category(props: CategoryData) {
    const classes = useStyles();
    const categoryClick = () => {
        console.log("id", props.id)
    }
    // const [category, setCategory] = useState<CategoryData>()
    return (
        <Card className={classes.root} onClick={categoryClick}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>

                </CardContent>
            </CardActionArea>

        </Card>
    )

}
