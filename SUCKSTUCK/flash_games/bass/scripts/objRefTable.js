const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Audio,
		C3.Plugins.Button,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Audio: 0},
	{Button: 0},
	{Mouse: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Button: class extends self.IButtonInstance {},
	Mouse: class extends self.IInstance {}
}