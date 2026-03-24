# Mobile App UI Guidelines

30 mobile app UI guidelines for React Native, Flutter, SwiftUI with platform-specific implementations and best practices.

---

## 1. Navigation Tab Bar (Bottom Navigation)

| Aspect | Details |
|--------|---------|
| **Category** | Navigation |
| **Guideline** | Primary navigation tabs at bottom (iOS) or top (Android) |
| **Severity** | HIGH |
| **Do** | 3-5 tabs, icons + labels, highlight active tab, easy thumb reach |
| **Don't** | More than 5 tabs, use top nav on iOS, text-only tabs |
| **React Native** | `<BottomTabNavigator screenOptions={{ tabBarLabel: 'Home', tabBarIcon: HomeIcon }}/>` |
| **Flutter** | `BottomNavigationBar(items: [BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home')])` |
| **SwiftUI** | `.tabItem { Label("Home", systemImage: "house.fill") }` |
| **Platform Differences** | iOS: bottom, 5-item max | Android: bottom or top, 3-5 items |
| **Icon Size** | 24-28px for clarity |
| **Label** | Short, 1 word if possible |

---

## 2. Navigation Drawer/Hamburger Menu

| Aspect | Details |
|--------|---------|
| **Category** | Navigation |
| **Guideline** | Secondary navigation in drawer from left edge |
| **Severity** | MEDIUM |
| **Do** | Hamburger icon visible, drawer slides smoothly, close on selection |
| **Don't** | Permanently open drawer on mobile, hide top tabs |
| **React Native** | `DrawerNavigator` from React Navigation |
| **Flutter** | `Drawer { ListView { ListTile(...) } }` |
| **SwiftUI** | `ZStack { NavigationView { List { ... } } }` |
| **Platform Differences** | iOS: drawer from left, Android: similar |
| **Width** | 272dp (Android Material), 256dp (iOS) |
| **Animation** | Smooth slide, 300ms transition |

---

## 3. Header/App Bar Styling

| Aspect | Details |
|--------|---------|
| **Category** | Navigation |
| **Guideline** | Clear header with title, back button, and actions |
| **Severity** | HIGH |
| **Do** | Title centered or left-aligned, back button visible, consistent height |
| **Don't** | Title too long, back button unclear, too many header actions |
| **React Native** | `<Header headerLeft={<BackButton />} title="Page Title" headerRight={<MenuButton />} />` |
| **Flutter** | `AppBar(title: Text('Page Title'), leading: BackButton(), actions: [...]` |
| **SwiftUI** | `.navigationTitle('Page Title').navigationBarBackButtonHidden(false)` |
| **Platform Differences** | iOS: 44-48px, Android: 56dp |
| **Safe Area** | Account for notch, status bar |
| **Title Style** | 18-20px font, bold weight |

---

## 4. Button Sizing & Touch Targets

| Aspect | Details |
|--------|---------|
| **Category** | Interaction |
| **Guideline** | Minimum 48x48px (Android), 44x44px (iOS) for touch targets |
| **Severity** | HIGH |
| **Do** | 48-56px height, adequate spacing between buttons, clear hit area |
| **Don't** | Buttons smaller than 44px, cramped spacing, small text |
| **React Native** | `<TouchableOpacity style={{ minHeight: 48, paddingHorizontal: 16 }}>` |
| **Flutter** | `ElevatedButton(style: ElevatedButton.styleFrom(padding: EdgeInsets.all(16)))` |
| **SwiftUI** | `.frame(minHeight: 44)` |
| **Spacing** | 8px minimum between buttons |
| **Padding** | Horizontal: 16px, Vertical: 12px minimum |
| **Text** | 14-16px font size for buttons |

---

## 5. Text Input Fields

| Aspect | Details |
|--------|---------|
| **Category** | Forms |
| **Guideline** | Clear labels, placeholder text, keyboard type appropriate |
| **Severity** | HIGH |
| **Do** | Label above input, placeholder for hint, keyboard match (email, number), 44px+ height |
| **Don't** | Placeholder as only label, generic keyboard, text too small |
| **React Native** | `<TextInput placeholder="Enter email" keyboardType="email-address" placeholderTextColor="#999" />` |
| **Flutter** | `TextField(decoration: InputDecoration(label: Text('Email'), hintText: 'example@email.com'))` |
| **SwiftUI** | `TextField("Email", text: $email).keyboardType(.emailAddress)` |
| **Keyboard Types** | email, phone, number, decimal, default |
| **Height** | 44px minimum (48px preferred) |
| **Padding** | 12px vertical, 16px horizontal |

---

## 6. Form Validation & Error States

| Aspect | Details |
|--------|---------|
| **Category** | Forms |
| **Guideline** | Real-time validation with clear error messages |
| **Severity** | HIGH |
| **Do** | Validate on blur, show error below field, red icon/text, specific message |
| **Don't** | Validate on keystroke (annoying), generic errors, late validation |
| **React Native** | `{isError && <Text style={{ color: 'red' }}>Email is invalid</Text>}` |
| **Flutter** | `errorText: isError ? 'Invalid email' : null` |
| **SwiftUI** | `if isInvalid { Text("Invalid email").foregroundColor(.red) }` |
| **Error Color** | Use #FF3B30 or Material error red |
| **Error Icon** | Red X or warning icon next to field |
| **Message** | 1-2 lines, actionable (not "Error!") |

---

## 7. Modal / Dialog Presentation

| Aspect | Details |
|--------|---------|
| **Category** | Modals |
| **Guideline** | Full-screen or centered modal with dimmed background |
| **Severity** | MEDIUM |
| **Do** | Swipe down to close (iOS), back button closes (Android), clear CTA |
| **Don't** | Modal without close option, unsure if modal can be dismissed |
| **React Native** | `<Modal visible={isVisible} transparent animationType="slide" onRequestClose={handleClose}>` |
| **Flutter** | `showModalBottomSheet(context: context, builder: (context) => BottomSheet())` |
| **SwiftUI** | `.sheet(isPresented: $isVisible) { ModalContent() }` |
| **Animation** | Slide up (bottom sheet) or fade in (dialog) |
| **Dismissible** | Swipe down, tap outside, back button |
| **Safe Area** | Account for notch when full-screen |

---

## 8. Bottom Sheet / Drawer

| Aspect | Details |
|--------|---------|
| **Category** | Modals |
| **Guideline** | Content slides up from bottom, can be dismissed by swipe or tap outside |
| **Severity** | MEDIUM |
| **Do** | Shows ~50% of content, swipeable, handle bar visible, smooth animation |
| **Don't** | Full-screen that requires scroll, unclear dismissal |
| **React Native** | `<BottomSheetModal snapPoints={[200, 500]} children={<SheetContent />} />` |
| **Flutter** | `showModalBottomSheet(builder: (context) => Column(...))` |
| **SwiftUI** | `.sheet(isPresented: $show) { BottomSheetView() }` |
| **Animation** | Smooth slide-up, 300ms |
| **Handle Bar** | Visible drag indicator at top |
| **Dismissible** | Swipe down or tap outside |

---

## 9. Alert / Confirmation Dialog

| Aspect | Details |
|--------|---------|
| **Category** | Modals |
| **Guideline** | Modal dialog for warnings, confirmations, with title, message, and actions |
| **Severity** | HIGH |
| **Do** | Clear title, specific message, 1-2 action buttons, clear destructive action |
| **Don't** | "Are you sure?", unclear actions, more than 2 buttons |
| **React Native** | `<Alert alertTitle="Confirm" alertMessage="Delete item?" actions={[{text: 'Delete', onPress: delete}]}/>` |
| **Flutter** | `showDialog(builder: (context) => AlertDialog(title: Text('Confirm'), actions: [...]))` |
| **SwiftUI** | `.alert("Confirm", isPresented: $show) { Button("Delete", role: .destructive) }` |
| **Buttons** | Max 2 primary actions, title should match action |
| **Destructive** | Red color for delete/destructive actions |
| **Cancel** | Always provide cancel option |

---

## 10. Toast / Snackbar Notifications

| Aspect | Details |
|--------|---------|
| **Category** | Feedback |
| **Guideline** | Brief notification at bottom (Android) or top (iOS) that auto-dismisses |
| **Severity** | MEDIUM |
| **Do** | Short message (2-3 words), auto-dismiss 2-3 seconds, non-blocking |
| **Don't** | Long messages in toast, toast requires interaction |
| **React Native** | `Alert.alert()` or custom toast component with auto-dismiss |
| **Flutter** | `ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Saved')))` |
| **SwiftUI** | Custom toast with `.onReceive(Timer.publish(every: 3).connect())` |
| **Position** | Bottom (Android), Top (iOS) - or consistent |
| **Duration** | 2-3 seconds, dismissible by swipe |
| **Animation** | Fade in/out, slide up/down |

---

## 11. Loading States & Spinners

| Aspect | Details |
|--------|---------|
| **Category** | Feedback |
| **Guideline** | Show spinner for loading, skeleton screen for content |
| **Severity** | HIGH |
| **Do** | Spinner centered, indeterminate or progress shown, message optional |
| **Don't** | Spinner too small, no indication of progress for long waits |
| **React Native** | `<ActivityIndicator size="large" color="#007AFF" />` |
| **Flutter** | `CircularProgressIndicator(valueColor: AlwaysStoppedAnimation(Colors.blue))` |
| **SwiftUI** | `ProgressView()` with styling |
| **Size** | 24-40px diameter |
| **Color** | Brand color or system blue |
| **Skeleton** | Show placeholder for content, animate opacity |

---

## 12. Pull-to-Refresh

| Aspect | Details |
|--------|---------|
| **Category** | Interaction |
| **Guideline** | Refresh content by pulling down list |
| **Severity** | MEDIUM |
| **Do** | Obvious refresh indicator, clear refresh message, disable during refresh |
| **Don't** | Unclear refresh gesture, hidden refresh button |
| **React Native** | `<FlatList refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} />` |
| **Flutter** | `RefreshIndicator(onRefresh: () async { await refreshData(); })` |
| **SwiftUI** | `.refreshable { await refreshData() }` (iOS 15+) |
| **Threshold** | ~100px pull distance |
| **Color** | Brand color |
| **Message** | "Refreshing..." during load |

---

## 13. Infinite Scroll / Load More

| Aspect | Details |
|--------|---------|
| **Category** | Navigation |
| **Guideline** | Load more items when user scrolls to bottom |
| **Severity** | MEDIUM |
| **Do** | Loading indicator at bottom, clear "load more" button option |
| **Don't** | Auto-load without indicator, poor scroll performance |
| **React Native** | `<FlatList onEndReached={loadMore} onEndReachedThreshold={0.5} />` |
| **Flutter** | `ListView.builder with ScrollController onScroll listener` |
| **SwiftUI** | `List { } .onAppear { loadMore() }` when near bottom |
| **Threshold** | Trigger at 50% of remaining scroll |
| **Indicator** | Spinner at bottom of list |
| **Alternative** | Pagination button is often better UX |

---

## 14. Segmented Control / Tabs

| Aspect | Details |
|--------|---------|
| **Category** | Navigation |
| **Guideline** | Choose between 2-4 options with segmented control |
| **Severity** | MEDIUM |
| **Do** | Equal size segments, highlight active, instant selection |
| **Don't** | More than 4 options (use tab bar), small touch area |
| **React Native** | `<SegmentedControl values={['Option 1', 'Option 2']} selectedIndex={selected} onChange={setSelected} />` |
| **Flutter** | `SegmentedButton<String>(segments: [...], selected: {selected})` |
| **SwiftUI** | `Picker(selection: $selected) { ForEach(...) { ... } }.pickerStyle(.segmented)` |
| **Height** | 32-44px |
| **Max Options** | 4 (use tab bar if more) |
| **Animation** | Instant selection, no fade |

---

## 15. Picker / Date Selector

| Aspect | Details |
|--------|---------|
| **Category** | Forms |
| **Guideline** | Use native date/time/option picker for input |
| **Severity** | MEDIUM |
| **Do** | Show native picker, clear current selection, dismissible |
| **Don't** | Custom wheel picker unless needed, unclear how to confirm |
| **React Native** | `<DatePickerIOS date={date} onDateChange={setDate} />` (iOS), `DatePickerAndroid.open()` |
| **Flutter** | `showDatePicker(context: context, initialDate: DateTime.now())` |
| **SwiftUI** | `DatePicker("Date", selection: $date)` |
| **Animation** | Smooth picker slide-in |
| **Confirm** | Show selected value, clear confirmation |
| **Type** | Date, time, date+time as needed |

---

## 16. Slider / Range Control

| Aspect | Details |
|--------|---------|
| **Category** | Forms |
| **Guideline** | Adjust continuous values with slider |
| **Severity** | MEDIUM |
| **Do** | 44px+ height, visible current value, smooth drag |
| **Don't** | Too small slider, unclear current value |
| **React Native** | `<Slider style={{ width: 300, height: 40 }} minimumValue={0} maximumValue={100} value={value} onValueChange={setValue} />` |
| **Flutter** | `Slider(value: value, onChanged: setValue, min: 0, max: 100)` |
| **SwiftUI** | `Slider(value: $value, in: 0...100)` |
| **Height** | 44px minimum |
| **Label** | Show current value, min/max labels |
| **Color** | Brand color for filled portion |

---

## 17. Switch / Toggle Control

| Aspect | Details |
|--------|---------|
| **Category** | Forms |
| **Guideline** | Boolean toggle for on/off settings |
| **Severity** | MEDIUM |
| **Do** | Clear on/off state, smooth animation, immediate feedback |
| **Don't** | Unclear state (confusing colors), sluggish animation |
| **React Native** | `<Switch value={isEnabled} onValueChange={setIsEnabled} />` |
| **Flutter** | `Switch(value: isEnabled, onChanged: setIsEnabled, activeColor: Colors.blue)` |
| **SwiftUI** | `Toggle("Setting", isOn: $isEnabled)` |
| **Size** | 51x31pt (iOS), 48x24dp (Android) |
| **Color** | Green when on, gray when off |
| **Animation** | Smooth 300ms transition |

---

## 18. Keyboard Handling

| Aspect | Details |
|--------|---------|
| **Category** | Forms |
| **Guideline** | Adjust layout when keyboard appears |
| **Severity** | HIGH |
| **Do** | Scroll input into view, dismiss keyboard on submit, handle safe area |
| **Don't** | Input hidden by keyboard, no way to dismiss |
| **React Native** | `<KeyboardAvoidingView behavior="padding"> ... </KeyboardAvoidingView>` |
| **Flutter** | `Scaffold(resizeToAvoidBottomInset: true)` handles automatically |
| **SwiftUI** | `.ignoresSafeArea(.keyboard)` or adjust with `.offset(y: keyboardHeight)` |
| **Keyboard Type** | email, number, phone, default as appropriate |
| **Return Key** | "Next" for multi-field, "Done" for last field, "Send" for submit |
| **Safe Area** | Account for notch, home indicator |

---

## 19. List Cell Styling

| Aspect | Details |
|--------|---------|
| **Category** | Lists |
| **Guideline** | Consistent list item styling with proper spacing |
| **Severity** | MEDIUM |
| **Do** | 44-56px height, 16px margins, divider between items, highlight on tap |
| **Don't** | Too small cells, unclear hierarchy, cramped content |
| **React Native** | `<FlatList data={items} renderItem={({ item }) => <ListCell item={item} />} />` |
| **Flutter** | `ListView.builder(itemBuilder: (context, i) => ListTile())` |
| **SwiftUI** | `List { ForEach(items) { item in ListCell(item) } }` |
| **Height** | 44-56px minimum |
| **Divider** | Subtle divider or spacing between items |
| **Selection** | Highlight on tap, subtle animation |

---

## 20. Card Layout

| Aspect | Details |
|--------|---------|
| **Category** | Layout |
| **Guideline** | Use cards to group related content |
| **Severity** | MEDIUM |
| **Do** | Padding/margin around cards, subtle shadow or border, consistent height |
| **Don't** | Cards too wide (edge-to-edge), no visual separation |
| **React Native** | `<View style={{ padding: 12, margin: 12, borderRadius: 8, backgroundColor: 'white', elevation: 2 }}> ... </View>` |
| **Flutter** | `Card(child: Padding(padding: EdgeInsets.all(16), child: ...))` |
| **SwiftUI** | `.card(.content) { CardContent() }` or custom card style |
| **Margin** | 16px from edges on mobile |
| **Padding** | 16px internal padding |
| **Shadow** | Subtle elevation/shadow |

---

## 21. Image Handling (Loading, Errors)

| Aspect | Details |
|--------|---------|
| **Category** | Media |
| **Guideline** | Show placeholder while loading, handle failed images |
| **Severity** | MEDIUM |
| **Do** | Placeholder while loading, error state shown, proper aspect ratio |
| **Don't** | Broken image showing, no placeholder, distorted images |
| **React Native** | `<Image source={{ uri: url }} onLoadStart={...} onError={...} />` with placeholder |
| **Flutter** | `Image.network(url, loadingBuilder: (context, child, loading) => ...)` |
| **SwiftUI** | `AsyncImage(url: url) { image in Image(uiImage: image) } placeholder: { SkeletonView() }` |
| **Aspect Ratio** | Maintain aspect ratio, use `resizeMode: 'cover'` |
| **Placeholder** | Gray skeleton or low-res blur-up |
| **Error** | Show icon or retry button |

---

## 22. Network Error States

| Aspect | Details |
|--------|---------|
| **Category** | Feedback |
| **Guideline** | Clear error message with actionable recovery |
| **Severity** | HIGH |
| **Do** | Clear error message, retry button, offline indicator if needed |
| **Don't** | Generic "Error", no retry option, unclear what failed |
| **React Native** | `{isError && <View><Text>Failed to load data</Text><Button title="Retry" onPress={retry} /></View>}` |
| **Flutter** | `Center(child: Column(children: [Icon(Icons.error), Text('Connection failed'), ElevatedButton(onPressed: retry, ...)]` |
| **SwiftUI** | `VStack { Image(systemName: "wifi.slash") Text("No connection") Button("Retry") { retry() } }` |
| **Message** | Specific (not "Error!"), user-friendly |
| **Icon** | Relevant error icon |
| **Action** | Retry button or alternative action |

---

## 23. Safe Area & Notch Handling

| Aspect | Details |
|--------|---------|
| **Category** | Layout |
| **Guideline** | Account for notches, home indicators, status bar |
| **Severity** | HIGH |
| **Do** | Use safe area insets, don't place content under notch |
| **Don't** | Content obscured by notch or home indicator |
| **React Native** | `<SafeAreaView> ... </SafeAreaView>` or manually use `useSafeAreaInsets()` |
| **Flutter** | `Scaffold` handles safe area, or use `SafeArea` widget |
| **SwiftUI** | `.ignoresSafeArea(.all)` then manually handle safe areas if needed |
| **Notch** | Leave space at top, avoid placing buttons |
| **Home Indicator** | ~34pt space at bottom on modern iPhones |
| **Status Bar** | 20pt top margin for status bar |

---

## 24. Dark Mode Support

| Aspect | Details |
|--------|---------|
| **Category** | Theming |
| **Guideline** | Support dark mode with proper contrast |
| **Severity** | MEDIUM |
| **Do** | Use system colors, high contrast in dark mode, test both modes |
| **Don't** | Same colors in dark mode (bad contrast), ignore dark mode |
| **React Native** | `useColorScheme()` hook to detect dark mode, use `Colors` from system |
| **Flutter** | `Theme.of(context).brightness == Brightness.dark` to detect, use adaptive colors |
| **SwiftUI** | `@Environment(\.colorScheme) var colorScheme` to detect |
| **Colors** | Use system colors (systemBackground, label, etc.) |
| **Contrast** | Ensure 4.5:1 ratio in both modes |
| **Testing** | Test on device in dark mode |

---

## 25. Orientation Handling (Portrait & Landscape)

| Aspect | Details |
|--------|---------|
| **Category** | Layout |
| **Guideline** | Support both portrait and landscape orientations |
| **Severity** | MEDIUM |
| **Do** | Responsive layout in both orientations, preserve state on rotation |
| **Don't** | Landscape broken, data lost on rotation |
| **React Native** | `Dimensions.addEventListener('change', handler)` or use responsive library |
| **Flutter** | `OrientationBuilder(builder: (context, orientation) => ...)` |
| **SwiftUI** | `@Environment(\.verticalSizeClass)` to detect orientation |
| **Landscape** | Full-width layout, horizontal navigation |
| **State** | Preserve scroll position and input data on rotation |
| **Testing** | Test device rotation during use |

---

## 26. Haptic Feedback

| Aspect | Details |
|--------|---------|
| **Category** | Feedback |
| **Guideline** | Use light haptic feedback for interactions |
| **Severity** | LOW |
| **Do** | Subtle haptic on button press, success, error |
| **Don't** | Strong haptic that's jarring, always enabled |
| **React Native** | `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)` with react-native-haptics |
| **Flutter** | `HapticFeedback.lightImpact()` for light feedback |
| **SwiftUI** | `UIImpactFeedbackGenerator(style: .light).impactOccurred()` |
| **Types** | Light (default), Medium (confirmation), Heavy (warning) |
| **Usage** | Button press, toggle, success action |
| **Respect** | Check haptics enabled in device settings |

---

## 27. Accessibility (VoiceOver, TalkBack)

| Aspect | Details |
|--------|---------|
| **Category** | Accessibility |
| **Guideline** | Support screen readers with proper labels and hints |
| **Severity** | HIGH |
| **Do** | Label all buttons/icons, describe images, test with VoiceOver/TalkBack |
| **Don't** | Icon-only buttons without labels, images without alt text |
| **React Native** | `accessibilityLabel="Button label" accessibilityHint="What happens"` |
| **Flutter** | `Semantics(label: 'Button label', child: ...)` |
| **SwiftUI** | `.accessibilityLabel("Label").accessibilityHint("Hint")` |
| **Labels** | Clear, concise, action-oriented |
| **Images** | Describe what's shown, not "image" |
| **Test** | Enable VoiceOver (iOS) or TalkBack (Android) |

---

## 28. Text Sizing & Readability

| Aspect | Details |
|--------|---------|
| **Category** | Typography |
| **Guideline** | Use system font sizes, support text size preferences |
| **Severity** | MEDIUM |
| **Do** | Use system font scales, min 14px body text, respect accessibility sizing |
| **Don't** | Fixed font sizes that ignore system preferences, tiny text |
| **React Native** | Use scaleFontSize or adjust for accessibility |
| **Flutter** | `Theme.of(context).textTheme.bodyLarge` for system text styles |
| **SwiftUI** | `.font(.body)` and `.font(.callout)` for system fonts |
| **Body Text** | 14-16px minimum |
| **Headlines** | 18-20px (h1), 16-18px (h2), 14-16px (h3) |
| **Monospace** | 12-14px for code or technical content |

---

## 29. Deep Linking & Navigation

| Aspect | Details |
|--------|---------|
| **Category** | Navigation |
| **Guideline** | Support deep links to specific screens and states |
| **Severity** | MEDIUM |
| **Do** | All major screens have deep links, state preserved on navigation |
| **Don't** | Can't navigate to specific screens from links, state lost |
| **React Native** | Configure `linking` in NavigationContainer |
| **Flutter** | Use `onGenerateRoute` to handle deep links |
| **SwiftUI** | Use `.onOpenURL` to handle deep links |
| **Format** | `app://home`, `app://product/123` |
| **Fallback** | Provide sensible fallback if deep link not found |
| **Test** | Test deep links with custom schemes |

---

## 30. Performance & Memory

| Aspect | Details |
|--------|---------|
| **Category** | Performance |
| **Guideline** | Optimize app performance for smooth 60fps UI |
| **Severity** | HIGH |
| **Do** | Keep lists virtualized, optimize images, avoid memory leaks |
| **Don't** | Render all list items, unoptimized images, leak memory |
| **React Native** | Use `FlatList` with `maxToRenderPerBatch`, `updateCellsBatchingPeriod` |
| **Flutter** | Use `ListView.builder`, avoid rebuilding entire tree |
| **SwiftUI** | Use `.id()` to help SwiftUI track views, lazy loading |
| **Images** | Compress/resize images, don't load full res |
| **Lists** | Virtual scroll for 50+ items |
| **Memory** | Profile with Xcode/Android Studio, fix leaks |

---

## Platform-Specific Best Practices

### iOS (SwiftUI)
- Use native components (List, NavigationView, TabView)
- Respect safe area (notch, home indicator)
- Support swipe gestures (back, dismiss)
- Use native pickers and date selectors

### Android (Flutter/Native)
- Follow Material Design 3 guidelines
- Back button for navigation
- Bottom navigation for main tabs
- Action bars/toolbars for secondary actions

### React Native (Cross-platform)
- Test thoroughly on both iOS and Android
- Use platform-specific code for native features
- Respect platform conventions
- Test with real devices, not just simulators

---

## Testing Checklist

- [ ] All interactive elements 44x44px+ (touch target)
- [ ] Navigation works on both iOS and Android
- [ ] Dark mode supported and tested
- [ ] Landscape orientation works
- [ ] Keyboard handling correct
- [ ] Error states clear and actionable
- [ ] Loading states visible
- [ ] Images optimized and load properly
- [ ] VoiceOver/TalkBack works with labels
- [ ] Form validation clear and helpful
- [ ] Safe area respected (notch, home indicator)
- [ ] Haptic feedback not overwhelming
- [ ] Performance smooth (60fps)
- [ ] Memory usage reasonable
- [ ] Deep links work
