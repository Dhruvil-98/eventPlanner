const adminSchema = new mongoose.Schema({
    admin_id: { type: Number, unique: true, required: true },
    user_id: { type: mongoose.Schema.Types.Number, ref: 'User', required: true },
    role: { type: String, required: true }  // e.g., 'superadmin', 'event_manager'
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;