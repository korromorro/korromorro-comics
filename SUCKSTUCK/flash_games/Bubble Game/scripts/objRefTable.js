const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.Sin,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn
	];
};
self.C3_JsPropNameTable = [
	{koramo: 0},
	{Bullet: 0},
	{Sine: 0},
	{Bubble: 0},
	{Keyboard: 0}
];

self.InstanceType = {
	koramo: class extends self.ISpriteInstance {},
	Bubble: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {}
}