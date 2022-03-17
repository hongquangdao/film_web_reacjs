import React from 'react'
import { Badge, Tooltip, tooltipClasses, styled } from '@mui/material'
import { img_300, unavailable } from '../Config/Config'
import "./SingleContent.css"
import ContentModal from '../ContentModal/ContentModal';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 14,
        fontFamily: "Montserrat sans-serif"
    },
}));

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    overview
}) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge
                badgeContent={vote_average}
                color={vote_average > 6 ? "primary" : "secondary"}
            />
            <LightTooltip
                title={overview}
                placement='top-start'
                arrow
            >
                <img
                    className="poster"
                    src={poster ? (img_300 + poster) : unavailable}
                    alt={title}
                />
            </LightTooltip>
            <b className="title" >{title}</b>
            <span className="subtitle" > {media_type === 'tv' ? 'Phim truyền hình' : 'Phim chiếu rạp'} </span>
            <span className="subtitle" > {date} </span>
        </ContentModal>
    )
}

export default SingleContent