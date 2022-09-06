import React from "react";
import {
    StyleSheet,
    View,
    Text,
    useWindowDimensions
} from "react-native"
import VideoPlayer from 'react-native-video-player'


const VideoModal = (props) => {
    const { video } = props.route.params;
    const { height: windowHeight, width: windowWidth } = useWindowDimensions();

    return (
        <View style={styles.mainContainer}>
            <VideoPlayer
                style={styles.trendingVideo}
                video={video}
                videoWidth={windowWidth}
                resizeMode="cover"
                autoplay
                videoHeight={windowHeight}
                thumbnail={require('../../assets/images/Image2.png')}
            />
        </View>
    )

}
export default VideoModal;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }

})