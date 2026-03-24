# Icon Reference Guide

Comprehensive icon library reference with 100+ icons, categorized for quick lookup, with React implementation and usage context.

---

## Navigation Icons (15 icons)

### Home
- **Icon Name**: Home, House
- **Keywords**: Home, Dashboard, Start, Main
- **Library**: Lucide Icons (primary)
- **React Import**: `import { Home } from 'lucide-react';`
- **Usage Code**: `<Home size={24} strokeWidth={2} />`
- **Context**: Dashboard entry point, homepage navigation
- **Style**: Modern flat, suitable for minimalist designs

### Settings / Gear
- **Icon Name**: Settings, Gear, Cog
- **Keywords**: Settings, Configuration, Preferences, Admin
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Settings } from 'lucide-react';`
- **Usage Code**: `<Settings size={24} strokeWidth={2} className="hover:rotate-90" />`
- **Context**: Settings pages, configuration menus, admin panels
- **Style**: Universal, works in most design systems

### Menu / Hamburger
- **Icon Name**: Menu, Hamburger, List
- **Keywords**: Navigation, Menu, Open, Toggle
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Menu } from 'lucide-react';`
- **Usage Code**: `<Menu size={24} strokeWidth={2} />`
- **Context**: Mobile navigation toggle, dropdown menus
- **Style**: Three horizontal lines, universally recognized

### Search
- **Icon Name**: Search, Magnifying Glass, Zoom
- **Keywords**: Find, Look, Query, Search
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Search } from 'lucide-react';`
- **Usage Code**: `<Search size={20} strokeWidth={2} />`
- **Context**: Search inputs, search buttons, discovery features
- **Style**: Magnifying glass, universally recognized

### Back / Arrow Left
- **Icon Name**: ArrowLeft, ChevronLeft, Back
- **Keywords**: Previous, Go Back, Navigation, Undo
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { ArrowLeft } from 'lucide-react';`
- **Usage Code**: `<ArrowLeft size={20} strokeWidth={2} />`
- **Context**: Back navigation, previous step in wizard
- **Style**: Directional arrow, clear intent

### Forward / Arrow Right
- **Icon Name**: ArrowRight, ChevronRight, Next
- **Keywords**: Next, Go Forward, Navigation, Continue
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { ArrowRight } from 'lucide-react';`
- **Usage Code**: `<ArrowRight size={20} strokeWidth={2} />`
- **Context**: Forward navigation, next step, call-to-action
- **Style**: Directional arrow, clear intent

### Chevron Up
- **Icon Name**: ChevronUp, ArrowUp
- **Keywords**: Collapse, Up, Expand, Minimize
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { ChevronUp } from 'lucide-react';`
- **Usage Code**: `<ChevronUp size={20} strokeWidth={2} />`
- **Context**: Collapse/expand toggles, scroll to top
- **Style**: Small angled line, subtler than arrow

### Chevron Down
- **Icon Name**: ChevronDown, ArrowDown
- **Keywords**: Expand, Down, Collapse, More
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { ChevronDown } from 'lucide-react';`
- **Usage Code**: `<ChevronDown size={20} strokeWidth={2} />`
- **Context**: Dropdown indicators, expand toggles, "show more"
- **Style**: Small angled line, subtle expansion indicator

### Close / X
- **Icon Name**: X, Close, Times
- **Keywords**: Close, Exit, Cancel, Dismiss
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { X } from 'lucide-react';`
- **Usage Code**: `<button aria-label="Close"><X size={20} strokeWidth={2} /></button>`
- **Context**: Close buttons, modals, dismissible alerts
- **Style**: Simple X, clear intent to close

### Bell / Notification
- **Icon Name**: Bell, Notification, Alert
- **Keywords**: Alert, Notification, Sound, Attention
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Bell } from 'lucide-react';`
- **Usage Code**: `<Bell size={24} strokeWidth={2} className="relative"><span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" /></Bell>`
- **Context**: Notification centers, alert indicators, reminders
- **Style**: Bell shape with clapper, can add badge for count

### User / Profile
- **Icon Name**: User, UserCircle, Profile
- **Keywords**: Account, Profile, User, Me
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { User } from 'lucide-react';`
- **Usage Code**: `<User size={24} strokeWidth={2} />`
- **Context**: User profiles, account menus, logged-in indicator
- **Style**: Head silhouette, universally recognized

### Users / People
- **Icon Name**: Users, People, Group
- **Keywords**: Team, Group, People, Collaboration
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Users } from 'lucide-react';`
- **Usage Code**: `<Users size={24} strokeWidth={2} />`
- **Context**: Team pages, group chat, collaboration features
- **Style**: Multiple head silhouettes

### Eye / View
- **Icon Name**: Eye, View, Visible
- **Keywords**: View, Look, Visibility, Watch
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Eye } from 'lucide-react';`
- **Usage Code**: `<Eye size={20} strokeWidth={2} />`
- **Context**: View toggles, show password, visibility control
- **Style**: Eye shape, clear visibility intent

### Eye Off / Hidden
- **Icon Name**: EyeOff, EyeClosed, Hidden
- **Keywords**: Hide, Invisible, Private, Secret
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { EyeOff } from 'lucide-react';`
- **Usage Code**: `<EyeOff size={20} strokeWidth={2} />`
- **Context**: Hide password, hide content, privacy control
- **Style**: Eye with slash, clear hiding intent

### More / Ellipsis
- **Icon Name**: MoreVertical, Ellipsis, DotsVertical
- **Keywords**: More, Options, Menu, Actions
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { MoreVertical } from 'lucide-react';`
- **Usage Code**: `<MoreVertical size={20} strokeWidth={2} />`
- **Context**: Context menus, action dropdowns, additional options
- **Style**: Three vertical dots, indicates more actions

---

## Action Icons (20 icons)

### Edit / Pencil
- **Icon Name**: Edit, Pencil, Edit2
- **Keywords**: Edit, Modify, Update, Change
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Edit } from 'lucide-react';`
- **Usage Code**: `<Edit size={20} strokeWidth={2} />`
- **Context**: Edit buttons, inline editing, content modification
- **Style**: Pencil with notepad, universally understood

### Delete / Trash
- **Icon Name**: Delete, Trash, Trash2, X
- **Keywords**: Delete, Remove, Discard, Destroy
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Trash2 } from 'lucide-react';`
- **Usage Code**: `<Trash2 size={20} strokeWidth={2} className="hover:text-red-600" />`
- **Context**: Delete buttons, discard actions, removal
- **Style**: Trash can, internationally recognized for deletion

### Download
- **Icon Name**: Download
- **Keywords**: Download, Save, Get, Receive
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Download } from 'lucide-react';`
- **Usage Code**: `<Download size={20} strokeWidth={2} />`
- **Context**: Download buttons, file exports, save actions
- **Style**: Arrow pointing down to line, clear download intent

### Upload
- **Icon Name**: Upload
- **Keywords**: Upload, Send, Share, Publish
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Upload } from 'lucide-react';`
- **Usage Code**: `<Upload size={20} strokeWidth={2} />`
- **Context**: Upload buttons, file inputs, publish actions
- **Style**: Arrow pointing up from line, clear upload intent

### Copy
- **Icon Name**: Copy, Copy2, Files
- **Keywords**: Copy, Duplicate, Clone, Replicate
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Copy } from 'lucide-react';`
- **Usage Code**: `<Copy size={20} strokeWidth={2} className="cursor-pointer" />`
- **Context**: Copy to clipboard, duplicate items, clone functionality
- **Style**: Overlapping rectangles, indicates copying/duplication

### Refresh / Reload
- **Icon Name**: RefreshCw, RotateCw, Refresh
- **Keywords**: Refresh, Reload, Restart, Retry
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { RefreshCw } from 'lucide-react';`
- **Usage Code**: `<RefreshCw size={20} strokeWidth={2} className={isLoading ? 'animate-spin' : ''} />`
- **Context**: Reload data, refresh view, retry actions
- **Style**: Circular arrow, universally recognized for refresh

### Share
- **Icon Name**: Share2, Share, ShareNetwork
- **Keywords**: Share, Send, Distribute, Post
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Share2 } from 'lucide-react';`
- **Usage Code**: `<Share2 size={20} strokeWidth={2} />`
- **Context**: Share buttons, social sharing, distribution
- **Style**: Connected nodes, indicates sharing/networking

### Lock
- **Icon Name**: Lock
- **Keywords**: Secure, Lock, Protected, Private
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Lock } from 'lucide-react';`
- **Usage Code**: `<Lock size={20} strokeWidth={2} />`
- **Context**: Protected content, secure areas, login required
- **Style**: Padlock, universally recognized for security

### Unlock
- **Icon Name**: Unlock
- **Keywords**: Open, Unlock, Unprotected, Public
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Unlock } from 'lucide-react';`
- **Usage Code**: `<Unlock size={20} strokeWidth={2} />`
- **Context**: Unlocked content, public access, open state
- **Style**: Open padlock, indicates unlocked state

### Plus
- **Icon Name**: Plus
- **Keywords**: Add, Create, New, Expand
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Plus } from 'lucide-react';`
- **Usage Code**: `<Plus size={24} strokeWidth={2} />`
- **Context**: Add buttons, new items, expand actions
- **Style**: Simple plus sign, universally recognized

### Minus
- **Icon Name**: Minus
- **Keywords**: Remove, Decrease, Subtract, Delete
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Minus } from 'lucide-react';`
- **Usage Code**: `<Minus size={20} strokeWidth={2} />`
- **Context**: Remove items, decrease quantity, collapse
- **Style**: Simple minus sign, clear removal intent

### Check / Checkmark
- **Icon Name**: Check, CheckCircle, CheckSquare
- **Keywords**: Done, Complete, Success, Confirm
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Check } from 'lucide-react';`
- **Usage Code**: `<Check size={20} strokeWidth={2} className="text-green-600" />`
- **Context**: Completion indicators, success states, done marks
- **Style**: Checkmark, universally recognized for success

### X / Cancel
- **Icon Name**: X
- **Keywords**: Cancel, Reject, Error, Nope
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { X } from 'lucide-react';`
- **Usage Code**: `<X size={20} strokeWidth={2} className="text-red-600" />`
- **Context**: Error indicators, cancel actions, rejection
- **Style**: X mark, universally recognized for error/cancel

### Zap / Lightning
- **Icon Name**: Zap
- **Keywords**: Power, Speed, Energy, Premium
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Zap } from 'lucide-react';`
- **Usage Code**: `<Zap size={20} strokeWidth={2} className="text-yellow-500" />`
- **Context**: Premium features, speed indicators, power actions
- **Style**: Lightning bolt, indicates power/energy

### Star
- **Icon Name**: Star
- **Keywords**: Favorite, Rating, Important, Premium
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Star } from 'lucide-react';`
- **Usage Code**: `<Star size={20} strokeWidth={2} fill={isFavorite ? 'currentColor' : 'none'} />`
- **Context**: Ratings, favorites, bookmarks, importance
- **Style**: Five-pointed star, universally recognized

### Heart
- **Icon Name**: Heart
- **Keywords**: Love, Favorite, Like, Wishlist
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Heart } from 'lucide-react';`
- **Usage Code**: `<Heart size={20} strokeWidth={2} fill={isLiked ? 'currentColor' : 'none'} />`
- **Context**: Like buttons, favorites, wishlist
- **Style**: Heart shape, recognized for love/preference

### Bookmark
- **Icon Name**: Bookmark
- **Keywords**: Save, Bookmark, Clip, Collect
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Bookmark } from 'lucide-react';`
- **Usage Code**: `<Bookmark size={20} strokeWidth={2} fill={isSaved ? 'currentColor' : 'none'} />`
- **Context**: Bookmark buttons, save for later, collections
- **Style**: Bookmark ribbon, indicates saving

### Flag
- **Icon Name**: Flag
- **Keywords**: Report, Flag, Important, Remind
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Flag } from 'lucide-react';`
- **Usage Code**: `<Flag size={20} strokeWidth={2} />`
- **Context**: Flag for review, mark important, report content
- **Style**: Flag shape, indicates flagging/marking

### Filter
- **Icon Name**: Filter
- **Keywords**: Filter, Refine, Search, Options
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Filter } from 'lucide-react';`
- **Usage Code**: `<Filter size={20} strokeWidth={2} />`
- **Context**: Filter buttons, refine results, filter panels
- **Style**: Funnel shape, universally recognized for filtering

---

## Status & Feedback Icons (16 icons)

### Info
- **Icon Name**: Info, InfoIcon
- **Keywords**: Information, Help, Context, Details
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Info } from 'lucide-react';`
- **Usage Code**: `<Info size={20} strokeWidth={2} className="text-blue-600" />`
- **Context**: Info messages, help tooltips, additional context
- **Style**: I in circle, universally recognized for information

### Warning / Alert
- **Icon Name**: AlertTriangle, AlertCircle
- **Keywords**: Warning, Alert, Caution, Important
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { AlertTriangle } from 'lucide-react';`
- **Usage Code**: `<AlertTriangle size={20} strokeWidth={2} className="text-yellow-600" />`
- **Context**: Warning messages, cautions, important alerts
- **Style**: Triangle with exclamation, recognized for warnings

### Error / X Circle
- **Icon Name**: XCircle, AlertCircle
- **Keywords**: Error, Fail, Problem, Issue
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { XCircle } from 'lucide-react';`
- **Usage Code**: `<XCircle size={20} strokeWidth={2} className="text-red-600" />`
- **Context**: Error states, validation failures, problems
- **Style**: X in circle, universally recognized for error

### Success / Check Circle
- **Icon Name**: CheckCircle
- **Keywords**: Success, Complete, Done, Good
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { CheckCircle } from 'lucide-react';`
- **Usage Code**: `<CheckCircle size={20} strokeWidth={2} className="text-green-600" />`
- **Context**: Success states, completion, validation pass
- **Style**: Checkmark in circle, recognized for success

### Loading / Loader
- **Icon Name**: Loader, Loader2, RotateCw
- **Keywords**: Loading, Wait, Processing, Please wait
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Loader } from 'lucide-react';`
- **Usage Code**: `<Loader size={20} strokeWidth={2} className="animate-spin" />`
- **Context**: Loading indicators, processing states
- **Style**: Spinning circle, universally recognized for loading

### Clock / Time
- **Icon Name**: Clock, Timer, Clock2
- **Keywords**: Time, Wait, Duration, Remind
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Clock } from 'lucide-react';`
- **Usage Code**: `<Clock size={20} strokeWidth={2} />`
- **Context**: Time indicators, duration displays, timer actions
- **Style**: Clock face, universally recognized for time

### Calendar
- **Icon Name**: Calendar
- **Keywords**: Date, Schedule, Event, Plan
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Calendar } from 'lucide-react';`
- **Usage Code**: `<Calendar size={20} strokeWidth={2} />`
- **Context**: Date pickers, event scheduling, date displays
- **Style**: Calendar page, recognized for dates/scheduling

### Mail
- **Icon Name**: Mail
- **Keywords**: Email, Message, Send, Contact
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Mail } from 'lucide-react';`
- **Usage Code**: `<Mail size={20} strokeWidth={2} />`
- **Context**: Email links, message indicators, contact options
- **Style**: Envelope, universally recognized for email

### Phone
- **Icon Name**: Phone
- **Keywords**: Call, Contact, Phone, Telephone
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Phone } from 'lucide-react';`
- **Usage Code**: `<Phone size={20} strokeWidth={2} />`
- **Context**: Call buttons, phone contact, phone numbers
- **Style**: Phone handset, universally recognized

### MapPin
- **Icon Name**: MapPin, Navigation, Compass
- **Keywords**: Location, Map, Navigate, Where
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { MapPin } from 'lucide-react';`
- **Usage Code**: `<MapPin size={20} strokeWidth={2} />`
- **Context**: Location indicators, map markers, address display
- **Style**: Pin shape, recognized for location/navigation

### Link
- **Icon Name**: Link, ExternalLink
- **Keywords**: Link, URL, External, Connect
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Link } from 'lucide-react';`
- **Usage Code**: `<Link size={16} strokeWidth={2} />`
- **Context**: Link indicators, URL display, external links
- **Style**: Chain link, indicates linking/external

### Cloud
- **Icon Name**: Cloud, CloudOff
- **Keywords**: Cloud, Storage, Sync, Online
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Cloud } from 'lucide-react';`
- **Usage Code**: `<Cloud size={20} strokeWidth={2} />`
- **Context**: Cloud storage, sync status, online indicators
- **Style**: Cloud shape, recognized for cloud services

### Wifi
- **Icon Name**: Wifi, WifiOff, Signal
- **Keywords**: Connectivity, Network, Online, Signal
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Wifi } from 'lucide-react';`
- **Usage Code**: `<Wifi size={16} strokeWidth={2} />`
- **Context**: Connection status, signal strength, network
- **Style**: WiFi arcs, universally recognized

### Battery
- **Icon Name**: Battery, BatteryLow, BatteryWarning
- **Keywords**: Power, Battery, Energy, Charge
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Battery } from 'lucide-react';`
- **Usage Code**: `<Battery size={16} strokeWidth={2} />`
- **Context**: Battery status, power indicators, device info
- **Style**: Battery shape, clear battery state

### Volume
- **Icon Name**: Volume, Volume2, VolumeX
- **Keywords**: Sound, Audio, Volume, Mute
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Volume2 } from 'lucide-react';`
- **Usage Code**: `<Volume2 size={20} strokeWidth={2} />`
- **Context**: Sound controls, mute buttons, audio settings
- **Style**: Speaker with sound waves, recognized for audio

---

## Communication Icons (12 icons)

### Chat / Message
- **Icon Name**: MessageCircle, MessageSquare, Chat
- **Keywords**: Chat, Message, Talk, Communicate
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { MessageCircle } from 'lucide-react';`
- **Usage Code**: `<MessageCircle size={20} strokeWidth={2} />`
- **Context**: Chat buttons, message indicators, communication
- **Style**: Speech bubble, universally recognized for messaging

### Send / Arrow
- **Icon Name**: Send
- **Keywords**: Send, Submit, Post, Share
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Send } from 'lucide-react';`
- **Usage Code**: `<Send size={20} strokeWidth={2} />`
- **Context**: Send buttons, submit actions, post messages
- **Style**: Arrow pointing up/right, indicates sending

### Reply
- **Icon Name**: Reply, ReplyAll
- **Keywords**: Reply, Respond, Answer, Reply-All
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Reply } from 'lucide-react';`
- **Usage Code**: `<Reply size={20} strokeWidth={2} />`
- **Context**: Reply buttons, respond to messages
- **Style**: Arrow returning, indicates replying

### Comment
- **Icon Name**: MessageCircle, Comment
- **Keywords**: Comment, Discuss, Feedback, Note
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { MessageCircle } from 'lucide-react';`
- **Usage Code**: `<MessageCircle size={20} strokeWidth={2} />`
- **Context**: Comment sections, discussion threads, feedback
- **Style**: Speech bubble, indicates comments

### Smile / Emoji
- **Icon Name**: Smile, Smile2
- **Keywords**: Emoji, Reaction, Happy, Feel
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Smile } from 'lucide-react';`
- **Usage Code**: `<Smile size={20} strokeWidth={2} />`
- **Context**: Emoji picker buttons, reaction selectors
- **Style**: Happy face, recognized for emojis/reactions

### ThumbsUp
- **Icon Name**: ThumbsUp
- **Keywords**: Like, Good, Agree, Approve
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { ThumbsUp } from 'lucide-react';`
- **Usage Code**: `<ThumbsUp size={20} strokeWidth={2} />`
- **Context**: Like buttons, approval indicators, feedback
- **Style**: Thumbs up gesture, universally positive

### ThumbsDown
- **Icon Name**: ThumbsDown
- **Keywords**: Dislike, Bad, Disagree, Disapprove
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { ThumbsDown } from 'lucide-react';`
- **Usage Code**: `<ThumbsDown size={20} strokeWidth={2} />`
- **Context**: Dislike buttons, negative feedback, disapproval
- **Style**: Thumbs down gesture, universally negative

### MessageSquare
- **Icon Name**: MessageSquare
- **Keywords**: Message, Chat, Notification, Count
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { MessageSquare } from 'lucide-react';`
- **Usage Code**: `<MessageSquare size={20} strokeWidth={2} />`
- **Context**: Message counters, notification badges, chat indicators
- **Style**: Square speech bubble, variant of chat

### AtSign / Mention
- **Icon Name**: AtSign
- **Keywords**: Mention, Tag, Notify, Reference
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { AtSign } from 'lucide-react';`
- **Usage Code**: `<AtSign size={16} strokeWidth={2} />`
- **Context**: User mentions, tagging users, notifications
- **Style**: @ symbol, indicates mentions

### Hash / Tag
- **Icon Name**: Hash
- **Keywords**: Hashtag, Tag, Topic, Category
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Hash } from 'lucide-react';`
- **Usage Code**: `<Hash size={16} strokeWidth={2} />`
- **Context**: Hashtags, topic tags, channel indicators
- **Style**: # symbol, recognized for hashtags

### Link / Chain
- **Icon Name**: Link
- **Keywords**: Link, Reference, Connect, Chain
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Link } from 'lucide-react';`
- **Usage Code**: `<Link size={16} strokeWidth={2} />`
- **Context**: Linking content, reference links, connections
- **Style**: Chain link, indicates linking

---

## Content & Document Icons (15 icons)

### File
- **Icon Name**: File
- **Keywords**: Document, File, Text, Page
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { File } from 'lucide-react';`
- **Usage Code**: `<File size={20} strokeWidth={2} />`
- **Context**: File indicators, document listing, file types
- **Style**: Document page, universally recognized

### FileText
- **Icon Name**: FileText
- **Keywords**: Document, Text, Content, Article
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { FileText } from 'lucide-react';`
- **Usage Code**: `<FileText size={20} strokeWidth={2} />`
- **Context**: Text documents, articles, content files
- **Style**: Page with text lines, indicates text content

### Image
- **Icon Name**: Image, ImageIcon
- **Keywords**: Picture, Photo, Visual, Gallery
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Image } from 'lucide-react';`
- **Usage Code**: `<Image size={20} strokeWidth={2} />`
- **Context**: Image uploads, image galleries, photo indicators
- **Style**: Picture frame, universally recognized

### Video
- **Icon Name**: Video, Film
- **Keywords**: Video, Movie, Play, Record
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Video } from 'lucide-react';`
- **Usage Code**: `<Video size={20} strokeWidth={2} />`
- **Context**: Video uploads, video players, video indicators
- **Style**: Camera or film reel, recognized for video

### Music
- **Icon Name**: Music
- **Keywords**: Audio, Song, Sound, Music
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Music } from 'lucide-react';`
- **Usage Code**: `<Music size={20} strokeWidth={2} />`
- **Context**: Audio files, music streaming, sound indicators
- **Style**: Musical note, universally recognized

### Archive / Zip
- **Icon Name**: Archive, Package
- **Keywords**: Archive, Zip, Compress, Package
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Archive } from 'lucide-react';`
- **Usage Code**: `<Archive size={20} strokeWidth={2} />`
- **Context**: Archive files, compressed files, packaging
- **Style**: Archive box or zip file, indicates compression

### Document / Pdf
- **Icon Name**: File
- **Keywords**: PDF, Document, Report, Contract
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { File } from 'lucide-react';`
- **Usage Code**: `<File size={20} strokeWidth={2} />`
- **Context**: PDF documents, reports, contracts
- **Style**: Document page, often with specific color for PDF

### Code
- **Icon Name**: Code, Code2
- **Keywords**: Code, Dev, Program, Script
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Code } from 'lucide-react';`
- **Usage Code**: `<Code size={20} strokeWidth={2} />`
- **Context**: Code blocks, code repositories, developer tools
- **Style**: Angle brackets <>, indicates code

### Database
- **Icon Name**: Database
- **Keywords**: Database, Data, Storage, Server
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Database } from 'lucide-react';`
- **Usage Code**: `<Database size={20} strokeWidth={2} />`
- **Context**: Database indicators, data storage, server info
- **Style**: Cylinder shape, recognized for databases

### Folder
- **Icon Name**: Folder
- **Keywords**: Directory, Folder, Collection, Group
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Folder } from 'lucide-react';`
- **Usage Code**: `<Folder size={20} strokeWidth={2} />`
- **Context**: Folder navigation, file organization, grouping
- **Style**: Folder tab, universally recognized

### Grid
- **Icon Name**: Grid, LayoutGrid
- **Keywords**: Grid, Layout, View, Gallery
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Grid } from 'lucide-react';`
- **Usage Code**: `<Grid size={20} strokeWidth={2} />`
- **Context**: Grid view toggle, layout switching, gallery view
- **Style**: Grid of squares, indicates grid layout

### List
- **Icon Name**: List, ListIcon
- **Keywords**: List, View, Items, Menu
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { List } from 'lucide-react';`
- **Usage Code**: `<List size={20} strokeWidth={2} />`
- **Context**: List view toggle, list layout, item listing
- **Style**: Horizontal lines, indicates list layout

### Eye / View Details
- **Icon Name**: Eye
- **Keywords**: View, See, Preview, Show
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Eye } from 'lucide-react';`
- **Usage Code**: `<Eye size={20} strokeWidth={2} />`
- **Context**: Preview buttons, view toggles, show details
- **Style**: Eye shape, indicates viewing/visibility

### Layers
- **Icon Name**: Layers
- **Keywords**: Layers, Stack, Level, Depth
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Layers } from 'lucide-react';`
- **Usage Code**: `<Layers size={20} strokeWidth={2} />`
- **Context**: Layer controls, stacking, depth management
- **Style**: Stacked squares, indicates layers

---

## Commerce Icons (12 icons)

### Shopping Cart
- **Icon Name**: ShoppingCart
- **Keywords**: Cart, Shop, Buy, Purchase
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { ShoppingCart } from 'lucide-react';`
- **Usage Code**: `<ShoppingCart size={24} strokeWidth={2} />`
- **Context**: Shopping carts, purchase buttons, checkout
- **Style**: Shopping cart, universally recognized

### ShoppingBag
- **Icon Name**: ShoppingBag
- **Keywords**: Shop, Bag, Purchase, Store
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { ShoppingBag } from 'lucide-react';`
- **Usage Code**: `<ShoppingBag size={24} strokeWidth={2} />`
- **Context**: Shopping bags, store navigation, fashion items
- **Style**: Shopping bag, recognized for shopping

### CreditCard
- **Icon Name**: CreditCard
- **Keywords**: Payment, Card, Credit, Debit
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { CreditCard } from 'lucide-react';`
- **Usage Code**: `<CreditCard size={20} strokeWidth={2} />`
- **Context**: Payment methods, card selection, billing
- **Style**: Credit card, universally recognized

### DollarSign
- **Icon Name**: DollarSign
- **Keywords**: Price, Cost, Money, Payment
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { DollarSign } from 'lucide-react';`
- **Usage Code**: `<DollarSign size={20} strokeWidth={2} />`
- **Context**: Pricing, cost indicators, payment amounts
- **Style**: $ symbol, universally recognized for money

### TrendingUp
- **Icon Name**: TrendingUp
- **Keywords**: Growth, Increase, Rise, Analytics
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { TrendingUp } from 'lucide-react';`
- **Usage Code**: `<TrendingUp size={20} strokeWidth={2} className="text-green-600" />`
- **Context**: Sales growth, performance indicators, analytics
- **Style**: Upward trending line, indicates growth

### TrendingDown
- **Icon Name**: TrendingDown
- **Keywords**: Decline, Decrease, Drop, Loss
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { TrendingDown } from 'lucide-react';`
- **Usage Code**: `<TrendingDown size={20} strokeWidth={2} className="text-red-600" />`
- **Context**: Sales decline, loss indicators, downtrend
- **Style**: Downward trending line, indicates decline

### BarChart
- **Icon Name**: BarChart2
- **Keywords**: Analytics, Data, Graph, Chart
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { BarChart2 } from 'lucide-react';`
- **Usage Code**: `<BarChart2 size={20} strokeWidth={2} />`
- **Context**: Analytics dashboards, data visualization, reports
- **Style**: Bar chart, universally recognized for data

### PieChart
- **Icon Name**: PieChart
- **Keywords**: Analytics, Distribution, Breakdown, Segment
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { PieChart } from 'lucide-react';`
- **Usage Code**: `<PieChart size={20} strokeWidth={2} />`
- **Context**: Distribution visualization, segment breakdown
- **Style**: Pie chart, recognized for proportions

### LineChart
- **Icon Name**: TrendingUp
- **Keywords**: Analytics, Trend, Performance, Growth
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { TrendingUp } from 'lucide-react';`
- **Usage Code**: `<TrendingUp size={20} strokeWidth={2} />`
- **Context**: Performance tracking, trend analysis, metrics
- **Style**: Line chart, indicates trends

### Percent
- **Icon Name**: Percent
- **Keywords**: Percentage, Discount, Rate, Percent
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Percent } from 'lucide-react';`
- **Usage Code**: `<Percent size={20} strokeWidth={2} />`
- **Context**: Discount indicators, rate display, percentage
- **Style**: % symbol, indicates percentages

### Gift
- **Icon Name**: Gift
- **Keywords**: Gift, Present, Reward, Bonus
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Gift } from 'lucide-react';`
- **Usage Code**: `<Gift size={20} strokeWidth={2} />`
- **Context**: Gift cards, rewards, promotions
- **Style**: Gift box with ribbon, recognized for gifts

### Package
- **Icon Name**: Package
- **Keywords**: Shipping, Delivery, Box, Package
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Package } from 'lucide-react';`
- **Usage Code**: `<Package size={20} strokeWidth={2} />`
- **Context**: Shipping tracking, delivery info, package status
- **Style**: Package box, universally recognized for shipping

---

## Media Control Icons (8 icons)

### Play
- **Icon Name**: Play
- **Keywords**: Play, Start, Begin, Begin
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Play } from 'lucide-react';`
- **Usage Code**: `<Play size={24} strokeWidth={2} fill="currentColor" />`
- **Context**: Video players, audio playback, start actions
- **Style**: Play triangle, universally recognized

### Pause
- **Icon Name**: Pause
- **Keywords**: Pause, Stop, Halt, Wait
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Pause } from 'lucide-react';`
- **Usage Code**: `<Pause size={24} strokeWidth={2} fill="currentColor" />`
- **Context**: Media pause, playback control
- **Style**: Pause bars, universally recognized

### SkipBack
- **Icon Name**: SkipBack
- **Keywords**: Previous, Back, Earlier, Rewind
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { SkipBack } from 'lucide-react';`
- **Usage Code**: `<SkipBack size={20} strokeWidth={2} fill="currentColor" />`
- **Context**: Previous track, rewind, earlier content
- **Style**: Skip back arrow, recognized for going back

### SkipForward
- **Icon Name**: SkipForward
- **Keywords**: Next, Forward, Later, Skip
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { SkipForward } from 'lucide-react';`
- **Usage Code**: `<SkipForward size={20} strokeWidth={2} fill="currentColor" />`
- **Context**: Next track, forward, later content
- **Style**: Skip forward arrow, recognized for skipping

### FastRewind
- **Icon Name**: FastRewind
- **Keywords**: Rewind, Go Back, Rewind, Earlier
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { FastRewind } from 'lucide-react';`
- **Usage Code**: `<FastRewind size={20} strokeWidth={2} fill="currentColor" />`
- **Context**: Fast rewind, go back in time, rewind
- **Style**: Double rewind arrows, indicates fast backward

### FastForward
- **Icon Name**: FastForward
- **Keywords**: Forward, Go Ahead, Accelerate, Skip
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { FastForward } from 'lucide-react';`
- **Usage Code**: `<FastForward size={20} strokeWidth={2} fill="currentColor" />`
- **Context**: Fast forward, skip ahead, accelerate
- **Style**: Double forward arrows, indicates fast forward

### Volume / Speaker
- **Icon Name**: Volume2
- **Keywords**: Volume, Sound, Audio, Speaker
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Volume2 } from 'lucide-react';`
- **Usage Code**: `<Volume2 size={20} strokeWidth={2} />`
- **Context**: Volume control, sound settings, audio
- **Style**: Speaker with sound waves, recognized for audio

### Fullscreen
- **Icon Name**: Maximize
- **Keywords**: Fullscreen, Expand, Maximize, Full
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Maximize } from 'lucide-react';`
- **Usage Code**: `<Maximize size={20} strokeWidth={2} />`
- **Context**: Fullscreen toggle, expand to full view
- **Style**: Expand arrows, indicates fullscreen

---

## Utility Icons (12 icons)

### Trash / Delete
- **Icon Name**: Trash2
- **Keywords**: Delete, Remove, Discard, Trash
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Trash2 } from 'lucide-react';`
- **Usage Code**: `<Trash2 size={20} strokeWidth={2} />`
- **Context**: Delete actions, remove items, discard
- **Style**: Trash can, universally recognized for deletion

### Archive
- **Icon Name**: Archive
- **Keywords**: Archive, Store, Save, Keep
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Archive } from 'lucide-react';`
- **Usage Code**: `<Archive size={20} strokeWidth={2} />`
- **Context**: Archive actions, store items, keep for later
- **Style**: Archive box, indicates archiving

### Sun
- **Icon Name**: Sun
- **Keywords**: Light, Day, Brightness, Theme
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Sun } from 'lucide-react';`
- **Usage Code**: `<Sun size={20} strokeWidth={2} />`
- **Context**: Light mode toggle, brightness control
- **Style**: Sun rays, recognized for light/brightness

### Moon
- **Icon Name**: Moon
- **Keywords**: Dark, Night, Theme, Dark Mode
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Moon } from 'lucide-react';`
- **Usage Code**: `<Moon size={20} strokeWidth={2} />`
- **Context**: Dark mode toggle, night theme
- **Style**: Crescent moon, recognized for darkness

### Heart / Favorite
- **Icon Name**: Heart
- **Keywords**: Favorite, Love, Like, Save
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Heart } from 'lucide-react';`
- **Usage Code**: `<Heart size={20} strokeWidth={2} fill={isFavorite ? 'currentColor' : 'none'} />`
- **Context**: Favorite toggles, like buttons, save items
- **Style**: Heart shape, universally recognized

### Bell / Notification
- **Icon Name**: Bell
- **Keywords**: Notification, Alert, Reminder, Attention
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Bell } from 'lucide-react';`
- **Usage Code**: `<Bell size={20} strokeWidth={2} />`
- **Context**: Notification indicators, alert buttons
- **Style**: Bell shape, universally recognized for notifications

### Question / Help
- **Icon Name**: HelpCircle
- **Keywords**: Help, Question, Support, FAQ
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { HelpCircle } from 'lucide-react';`
- **Usage Code**: `<HelpCircle size={20} strokeWidth={2} />`
- **Context**: Help buttons, FAQ, support links
- **Style**: ? in circle, universally recognized for help

### Anchor
- **Icon Name**: Anchor
- **Keywords**: Pin, Link, Connect, Anchor
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Anchor } from 'lucide-react';`
- **Usage Code**: `<Anchor size={20} strokeWidth={2} />`
- **Context**: Anchor links, pin items, connect points
- **Style**: Anchor shape, indicates anchoring/linking

### Compass
- **Icon Name**: Compass
- **Keywords**: Navigate, Direction, Explore, Guide
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Compass } from 'lucide-react';`
- **Usage Code**: `<Compass size={20} strokeWidth={2} />`
- **Context**: Navigation guides, direction indicators
- **Style**: Compass rose, recognized for navigation

### AlertCircle
- **Icon Name**: AlertCircle
- **Keywords**: Alert, Warning, Important, Attention
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { AlertCircle } from 'lucide-react';`
- **Usage Code**: `<AlertCircle size={20} strokeWidth={2} className="text-yellow-600" />`
- **Context**: Alert indicators, attention needed, warnings
- **Style**: ! in circle, indicates alerts

### Eye / Vision
- **Icon Name**: Eye
- **Keywords**: View, Watch, Look, See
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Eye } from 'lucide-react';`
- **Usage Code**: `<Eye size={20} strokeWidth={2} />`
- **Context**: View toggles, visibility controls, preview
- **Style**: Eye shape, universally recognized

### Minimize
- **Icon Name**: Minimize
- **Keywords**: Minimize, Collapse, Small, Reduce
- **Library**: Lucide Icons, Feather Icons
- **React Import**: `import { Minimize } from 'lucide-react';`
- **Usage Code**: `<Minimize size={20} strokeWidth={2} />`
- **Context**: Minimize actions, collapse windows, reduce
- **Style**: Collapse arrows, indicates minimizing

---

## Icon Style Guidelines

### Stroke Icons (Default)
- **Best For**: UI elements, navigation, status indicators
- **Characteristics**: Outlined appearance, thin strokes, scalable
- **React Usage**: `<Home size={24} strokeWidth={2} />`
- **Variants**: strokeWidth 1.5 (light), 2 (regular), 3 (bold)

### Filled Icons
- **Best For**: Emphasis, selected states, important actions
- **Characteristics**: Solid fill, bold appearance, high visibility
- **React Usage**: `<Heart size={24} fill="currentColor" />`
- **When to Use**: Highlight selected items, favorite toggles, important alerts

### Colored Icons
- **Best For**: Status indicators, semantic meaning
- **Characteristics**: Color-coded meaning (red=error, green=success)
- **React Usage**: `<CheckCircle size={24} className="text-green-600" />`
- **Color Mapping**: Green=success, Red=error, Yellow=warning, Blue=info

### Icon Combinations
- **Best For**: Complex information, multi-status display
- **Characteristics**: Stack or overlay icons for compound meaning
- **React Usage**: Badge icon with notification count overlay
- **Example**: Bell icon + red dot in corner for unread notifications

### Animated Icons
- **Best For**: Loading states, process indicators
- **Characteristics**: Rotating, pulsing, or morphing animations
- **React Usage**: `<Loader className="animate-spin" />`
- **Common Patterns**: Spinner (rotation), pulse (loading), bounce

### Dark Mode Icons
- **Best For**: Theme-aware applications
- **Characteristics**: Adapt stroke weight, color for dark backgrounds
- **React Usage**: Conditional color based on theme hook
- **Best Practice**: Use currentColor for theme-aware coloring

---

## Implementation Tips

1. **Icon Size Consistency**: Use predefined sizes (16, 20, 24, 32) for consistency
2. **Stroke Width**: Default 2 for most UIs, 1.5 for dense UIs, 3 for large displays
3. **Color**: Use currentColor for theme-aware icons
4. **Accessibility**: Always add aria-label to icon-only buttons
5. **Performance**: Icons are lightweight; safe to use freely
6. **Library Selection**: Lucide Icons is recommended for React projects

---

## Quick Import Template

```jsx
import {
  Home,
  Settings,
  Search,
  User,
  Heart,
  ShoppingCart
} from 'lucide-react';

// Usage
<Home size={24} strokeWidth={2} />
<Heart size={20} strokeWidth={2} fill="none" />
```
