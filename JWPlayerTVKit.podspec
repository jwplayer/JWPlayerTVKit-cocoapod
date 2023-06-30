Pod::Spec.new do |s|

  s.name         = "JWPlayerTVKit"
  s.version      = "1.0.1"
  s.summary      = "JWPlayerTVKit for tvOS. SDKs page: https://www.jwplayer.com/mobile-sdk"

  s.homepage     = "https://www.jwplayer.com/mobile-sdk/"
  s.license      = { :type => "Commercial", :file => "LICENSE.md" }

  s.authors      = { "JW Player" => "support@jwplayer.com" }

  s.platform     = :tvos, "14.0"
  s.documentation_url = "https://docs.jwplayer.com/players/docs/ios-get-started"
  s.source       = { :git => "git@github.com:jwplayer/JWPlayerTVKit-cocoapod.git", :tag => s.version.to_s }

  s.tvos.vendored_frameworks = "JWPlayerTVKit.xcframework"

  s.social_media_url = 'https://www.facebook.com/jwplayer/'
  s.social_media_url = 'https://twitter.com/jwplayer'
  s.social_media_url = 'https://twitter.com/jwpsupport'

  s.requires_arc = true

  # From https://www.jwplayer.com/mobile-sdk/
  s.description = <<-DESC
    The SDK includes native software classes and methods that enable developers
    to build HLS video playback, VAST advertising, player UI customization and
    other features directly into your tvOS application to expand your reach to
    the billions of OTT app users worldwide.
  DESC

end
