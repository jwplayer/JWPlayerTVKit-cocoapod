//
//  JWCinematicObjCViewController.h
//  JWPlayer-iOS-SDK
//
//  Created by David Perez on 30/05/22.
//  Copyright © 2022 JWPlayer. All rights reserved.
//

#ifndef JWCinematicObjCViewController_h
#define JWCinematicObjCViewController_h

#import <JWPlayerTVKit/JWPlayerTVKit-swift.h>
#import <AVKit/AVKit.h>

/**
 This is the Objective-C version of `JWCinematicViewController`.
 */
@interface JWCinematicObjCViewController : UIViewController
<AVPictureInPictureControllerDelegate,
JWPlayerViewDelegate,
JWPlayerDelegate,
JWPlayerStateDelegate,
JWAVDelegate,
JWAdDelegate,
JWAirPlayDelegate,
JWAccessLogMetadataDelegate,
JWDateRangeMetadataDelegate,
JWID3MetadataDelegate,
JWExternalMetadataDelegate,
JWProgramDateTimeMetadataDelegate,
JWMediaMetadataDelegate,
JWTimeEventListener>

/// The JWPlayer interface, used to control playback and configure the player.
@property (nonatomic, readonly) id<JWPlayer> _Nonnull player;
/// The view containing the player.
@property (nonatomic, readonly) JWPlayerView * _Nonnull playerView;

/// The delegate to receive JWPlayerViewController events.
@property (nonatomic, weak, readwrite) id<JWPlayerCinematicViewControllerDelegate> _Nullable delegate;

/// The behavior desired for the interface. By default, this is JWInterfaceBehaviorNormal.
@property (nonatomic, assign, readwrite) JWInterfaceBehavior interfaceBehavior;

/// If YES, the player will go full screen when rotated into landscape orientation. Defaults to `YES`.
@property (nonatomic, assign, readwrite) BOOL forceFullScreenOnLandscape;

/// If true, the player rotates into landscape when it goes into fullscreen. Defaults to `true`.
@property (nonatomic, assign, readwrite) BOOL forceLandscapeOnFullScreen;

/// The poster image to display when there is no Internet connection. By default, it displays the poster image of the current video.
@property (nonatomic, retain, readwrite) UIImage * _Nullable offlinePosterImage;

/// The message to display when Internet connection is lost. By default it is "Internet Lost".
@property (nonatomic, retain, readwrite) NSString * _Nonnull offlineMessage;

/// The style defining the Next Up card and its behavior. Defaults to nil (no card).
@property (nonatomic, retain, readwrite) JWNextUpStyle * _Nullable nextUpStyle;

/// Sets a custom logo to display on the player.
@property (nonatomic, retain, readwrite) JWLogo * _Nullable logo;

/**
 The number of seconds to wait when fading the interface. The default is 3 seconds.
 - note: This only applies when `interfaceBehavior` is JWInterfaceBehaviorNormal..
 */
@property (nonatomic, assign, readwrite) NSTimeInterval interfaceFadeDelay;

/**
 Available playback rates.

 This property is automatically sorted. If an empty array is specified, 1.0 becomes the only available option. Rates must be greater than 0 and less than or equal to 4.0. Invalid rates are removed from the array.

 The default rates are: [0.5, 1.0, 1.25, 1.5, 2.0]
 */
@property (nonatomic, assign) NSArray<NSNumber *> * _Nonnull playbackRates;

/// The desc the player is initialized with for the ad interface.
@property (nonatomic, retain) JWAdInterfaceStyle * _Nonnull adInterfaceStyle;

/**
 It enables the lock screen controls to be synchronized with the player. The default is `true`.
 */
@property (nonatomic, assign) BOOL enableLockScreenControls;

/**
 A Boolean value that determines whether the player view allows Picture in Picture playback.
 - note: By default, this is value is true.
*/
@property (nonatomic, assign, readwrite) BOOL allowsPictureInPicturePlayback;

/**
 Sets the font of a label on the player.
 - parameter font: The font to set the label to. If `nil`, the default is used.
 - parameter label: The label to set the font of.
 */
- (void)setFont:(UIFont * _Nullable)font label:(enum JWLabelType)label;

/**
 Sets the text color of a label on the player.
 - parameter textColor: The color to set the label's text color to.
 - parameter label: The label to set the text color of.
 */
- (void)setTextColor:(UIColor * _Nullable)color label:(enum JWLabelType)label;

/**
 Sets the font of a button on the player.
 - parameter font: The font to set the button to. If `nil`, the default is used.
 - parameter state: The state for the font to be applied to.
 - parameter button: The button to set the font of.
 */
- (void)setFont:(UIFont * _Nullable)font forState:(UIControlState)state button:(enum JWButtonType)button;

/**
 Sets the title color of a button on the player.
 - parameter titleColor: The color to set the button's title color to.
 - parameter state: The state for the color to be applied to.
 - parameter button: The button to set the title color of.
 */
- (void)setTitleColor:(UIColor * _Nullable)color forState:(UIControlState)state button:(enum JWButtonType)button;

/**
 Sets the tint color of a button on the player.
 - parameter color: The color to set the button's color to. If `nil`, the default is used.
 - parameter button: The button to set the tint color of.
 */
- (void)setTintColor:(UIColor * _Nullable)color button:(enum JWButtonType)button;

/**
 Sets the background color of a group of views on the player.
 - parameter color: The color to set the views' background color to. If `nil`, the default is used.
 - parameter views: The views to set the background color of.
 */
- (void)setBackgroundColor:(UIColor * _Nullable)color view:(enum JWViewType)view;

@end

#endif /* JWCinematicObjCViewController_h */
