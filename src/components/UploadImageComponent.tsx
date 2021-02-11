import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

const ReactagramTheme = {
	// Theme object to extends default dark theme.
};

export const UploadImageComponent = () => (
	<ImageEditor
		includeUI={{
			loadImage: {
				path: 'img/sampleImage.jpg',
				name: 'SampleImage',
			},
			theme: ReactagramTheme,
			menu: ['shape', 'filter'],
			initMenu: 'filter',
			uiSize: {
				width: '1000px',
				height: '700px',
			},
			menuBarPosition: 'bottom',
		}}
		cssMaxHeight={500}
		cssMaxWidth={700}
		selectionStyle={{
			cornerSize: 20,
			rotatingPointOffset: 70,
		}}
		usageStatistics={true}
	/>
);
