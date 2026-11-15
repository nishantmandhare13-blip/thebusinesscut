# ProGuard rules for The Business Cut LMS
-keepattributes *Annotation*,Signature,InnerClasses,EnclosingMethod
-keep class com.thebusinesscut.lms.data.model.** { *; }
-keepclassmembers class * {
    @kotlinx.serialization.Serializable *;
}
