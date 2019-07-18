import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, TouchableHighlight, Text, StyleSheet } from 'react-native';

const defaultColor = '#737373';
const defaultBgColor = '#fff';
const defaultSelectedColor = "#2a2a2a";
const defaultSelectedBgColor = "#e4e4e4";
const defaultSize = 16;

class CNToolbar extends Component {

    constructor(props) {
        super(props);
    }

    onStyleKeyPress(toolItem) {
        if (this.props.onStyleKeyPress)
            this.props.onStyleKeyPress(toolItem);
    }

    renderStyleButtons(size, color, bgColor, selectedColor, selectedBgColor) {
        const { selectedStyles, selectedTag, bold,
            italic,
            underline,
            lineThrough } = this.props;
        return (
            <View style={[styles.iconSetContainer, { flexGrow: 4 }]}>
                {
                    bold ?
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.onStyleKeyPress('bold');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                backgroundColor: selectedStyles.indexOf('bold') >= 0 ? selectedBgColor : bgColor
                            }]}>
                                {
                                    React.cloneElement(bold, { size: size, color: selectedStyles.indexOf('bold') >= 0 ? selectedColor : color })
                                }
                            </View>

                        </TouchableWithoutFeedback>
                        : null
                }
                {
                    italic ?
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.onStyleKeyPress('italic');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                backgroundColor: selectedStyles.indexOf('italic') >= 0 ? selectedBgColor : bgColor
                            }]}>
                                {
                                    React.cloneElement(italic, { size: size, color: selectedStyles.indexOf('italic') >= 0 ? selectedColor : color })
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        : null
                }
                {
                    underline ?
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.onStyleKeyPress('underline');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                backgroundColor: selectedStyles.indexOf('underline') >= 0 ? selectedBgColor : bgColor
                            }]}>
                                {
                                    React.cloneElement(underline, { size: size, color: selectedStyles.indexOf('underline') >= 0 ? selectedColor : color })
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        : null
                }
                {
                    lineThrough ?
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.onStyleKeyPress('lineThrough');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                backgroundColor: selectedStyles.indexOf('lineThrough') >= 0 ? selectedBgColor : bgColor
                            }]}>
                                {
                                    React.cloneElement(lineThrough, { size: size, color: selectedStyles.indexOf('lineThrough') >= 0 ? selectedColor : color })
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        : null
                }
            </View>
        )
    }

    renderTagButtons(size, color, bgColor, selectedColor, selectedBgColor) {
        const { selectedStyles, selectedTag, title,
            heading,
            ul,
            ol,
            body, } = this.props;
        return (
            <View style={[styles.iconSetContainer, { flexGrow: 5 }]}>
                {body ?
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.onStyleKeyPress('body');
                        }}>
                        <View style={[styles.iconContainer
                            , {
                            backgroundColor: selectedTag === 'body' ? selectedBgColor : bgColor
                        }]}>
                            {
                                React.cloneElement(body, { size: size, color: selectedTag === 'body' ? selectedColor : color })
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    : null
                }
                {
                    title ?

                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.onStyleKeyPress('title');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                backgroundColor: selectedTag === 'title' ? selectedBgColor : bgColor
                            }]}>
                                {
                                    React.cloneElement(title, { size: size, color: selectedTag === 'title' ? selectedColor : color })
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        : null
                }
                {
                    heading ?
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.onStyleKeyPress('heading');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                backgroundColor: selectedTag === 'heading' ? selectedBgColor : bgColor
                            }]}>
                                {
                                    React.cloneElement(heading, { size: size, color: selectedTag === 'heading' ? selectedColor : color })
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        : null
                }
                {
                    ul ?
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.onStyleKeyPress('ul');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                backgroundColor: selectedTag === 'ul' ? selectedBgColor : bgColor
                            }]}>
                                {
                                    React.cloneElement(ul, { size: size, color: selectedTag === 'ul' ? selectedColor : color })
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        : null
                }
                {
                    ol ?
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.onStyleKeyPress('ol');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                backgroundColor: selectedTag === 'ol' ? selectedBgColor : bgColor
                            }]}>
                                {
                                    React.cloneElement(ol, { size: size, color: selectedTag === 'ol' ? selectedColor : color })
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        : null
                }
            </View>
        );
    }

    renderExtras(size, color, bgColor, selectedColor, selectedBgColor) {
        const { selectedStyles, selectedTag, title,
            image,
            highlight,
            foreColor,
        } = this.props;
        return (
            <View style={[styles.iconSetContainer, { flexGrow: 2 }]}>
                {
                    image ?
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            onPress={() => {
                                this.onStyleKeyPress('image');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                    backgroundColor: bgColor
                                }]}>
                                {
                                    React.cloneElement(image, { size: size, color: color })
                                }
                            </View>
                        </TouchableHighlight>
                        : null
                }
                {
                    foreColor ?
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.onStyleKeyPress('foreColor');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                    backgroundColor: selectedStyles.indexOf('foreColor') >= 0 ? selectedBgColor : bgColor
                                }]}>
                                {
                                    React.cloneElement(foreColor, { size: size, color: selectedStyles.indexOf('foreColor') >= 0 ? selectedColor : color })
                                }
                            </View>
                        </TouchableWithoutFeedback>
                        : null
                }
                {highlight ?
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.onStyleKeyPress('highlight');
                        }}>
                        <View style={[styles.iconContainer
                            , {
                                backgroundColor: selectedStyles.indexOf('highlight') >= 0 ? selectedBgColor : bgColor
                            }]}>
                            {
                                React.cloneElement(highlight, { size: size, color: selectedStyles.indexOf('highlight') >= 0 ? selectedColor : color })
                            }
                        </View>

                    </TouchableWithoutFeedback>
                    : null
                }
            </View>
        )
    }

    renderMedia(size, color, bgColor) {
        const { 
            video,
        } = this.props;
        return (
            <View style={[styles.iconSetContainer, { flexGrow: 2 }]}>
                {
                    video ?
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            onPress={() => {
                                this.onStyleKeyPress('video');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                    backgroundColor: bgColor
                                }]}>
                                {
                                    React.cloneElement(video, { size: size, color: color })
                                }
                            </View>
                        </TouchableHighlight>
                        : null
                }
               
            </View>
        )
    }


    renderLink(size, color, bgColor, selectedColor, selectedBgColor) {
        const {
          link
        } = this.props;
        return (
            <View style={[styles.iconSetContainer, { flexGrow: 2 }]}>
                {
                    link ?
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            onPress={() => {
                                this.onStyleKeyPress('link');
                            }}>
                            <View style={[styles.iconContainer
                                , {
                                    backgroundColor: bgColor
                                }]}>
                                {
                                    React.cloneElement(link, { size: size})
                                }
                            </View>
                        </TouchableHighlight>
                        : null
                }
            </View>
        )
    }

    render() {
        const { selectedStyles, selectedTag,
            bold, italic, underline, lineThrough,link,
            title, heading, ul, ol, body,
            image, foreColor, highlight , video
        } = this.props;

        let styleButtons = !bold && !italic && !underline && !lineThrough;
        let tagButtons = !title && !heading && !ul && !ol && !body;
        let extraButtons = !image && !foreColor && !highlight;
        let styleLink = !link ;
        let mediaButtons = !video ;

        let size = this.props.size ? this.props.size : defaultSize;
        let color = this.props.color ? this.props.color : defaultColor;
        let bgColor = this.props.backgroundColor ? this.props.backgroundColor : defaultBgColor;
        let selectedColor = this.props.selectedColor ? this.props.selectedColor : defaultSelectedColor;
        let selectedBgColor = this.props.selectedBackgroundColor ? this.props.selectedBackgroundColor : defaultSelectedBgColor;

        return (
            <View style={styles.toolbarContainer}>
                {styleButtons === false ? this.renderStyleButtons(size, color, bgColor, selectedColor, selectedBgColor) : null}
                {(styleButtons === false && tagButtons === false) ? <View style={styles.separator}></View> : null}
                {tagButtons === false ? this.renderTagButtons(size, color, bgColor, selectedColor, selectedBgColor) : null}
                {(tagButtons === false && extraButtons === false) ? <View style={styles.separator}></View> : null}
                {styleLink === false ? this.renderLink(size, color, bgColor, selectedColor, selectedBgColor) : null}
                {extraButtons === false ? this.renderExtras(size, color, bgColor, selectedColor, selectedBgColor) : null}
                {mediaButtons === false ? this.renderMedia(size, color, bgColor) : null}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    icon: {
        top: 2
    },
    iconContainer: {
        borderRadius: 3,
        alignItems: 'center', justifyContent: 'center',
    },
    iconSetContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 3,
        paddingRight: 3,
        marginRight: 1
    },
    toolbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: defaultSelectedBgColor,
        borderRadius: 4,
        padding: 2,
        backgroundColor: '#fff'
    },
    separator: {
        width: 2,
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: defaultSelectedBgColor,
    }
})

export default CNToolbar;

